import React, {useState} from 'react'
import {facebookProvider, googleProvider} from '../config/authMethods'
import socialMediaAuth from '../config/auth'

const SocialLogin = ()=>{

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [img, setImg]= useState();
    const [uid, setUid] = useState();
    const [msg, setMsg] = useState();

    const handleOnClick = async (provider)=>{
        const res = await socialMediaAuth(provider)
        if(res.uid){
            console.log(res)
            setName(res.displayName)
            setEmail(res.email)
            setImg(res.photoURL)

            setUid(res.uid)
        }
        else{setMsg("User not found")}
    }

    return(
        <div>
            <p>Social</p>
            <button onClick={()=>handleOnClick(facebookProvider)}>Facebook</button>
            <button onClick={()=>handleOnClick(googleProvider)}>Google</button>
            <br></br> <br></br> <br></br>
            {uid && <div>
                <img src={img}></img>
                <p>Hi {name}</p>
                <p>Email: {email}</p>
                <p>User ID (Google): {uid}</p>
                
            </div>}
            {msg && <div>{msg}</div>}
        </div>
    )
}

export default SocialLogin