import React, {useState} from 'react'
import { Form } from 'react-bootstrap';
import './adminLogin.css';
import Loading from './Loading';

const AdminLogin = (props) => {

    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [isLoading, setIsLoading] = useState();
    const [loggedIn, setLoggedIn] = useState();
    const [userName, setUserName] = useState();
    const [type, setType] = useState("police");

    const [msg, setMsg] = useState();


    
    const loginHandler = async e => {
        setIsLoading(true)
        e.preventDefault();
        console.log("called");
        try{
        const response = await fetch('https://helping-backend.vercel.app/api/admin' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type, username:userName, password, password2
            })
            
        });
        const responseData = await response.json();

        if(response.ok) {
            setLoggedIn(true) //not working!!!
            props.login(true, type)
            //console.log("login: "+ loggedIn)
            
        }
        else {setMsg("Wrong Credentials")}
        setIsLoading(false)
        console.log("s: "+ responseData)
        //localStorage.setItem("adminName", JSON.stringify(responseData.session))
        localStorage.setItem("adminToken", JSON.stringify(responseData.jsontoken))
        
    }
    catch {
        setIsLoading(false)
    }
    
}

    

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handlePasswordChange2 = e => {
        setPassword2(e.target.value);
    }
    const usernameChange =  e => {
        setUserName(e.target.value);
    }

    const serviceSet = e => {
        setType(e.target.value);
    }


    return(
        <React.Fragment>
            {isLoading && <Loading/>}

            {!isLoading && !loggedIn && 
            
        <div className="App">
        <div className="">
            <select name="serviceType" value={type} onChange={serviceSet}>
                <option value="service">Service type</option>
                <option value="police">Police Station</option>
                <option value="fire">Fire Service</option>
                <option value="others">Others</option>
            </select>
            <Form.Control name="username" value={userName} onChange={usernameChange} type="email" required placeholder="Username"></Form.Control>
            <Form.Control value={password} onChange={handlePasswordChange} name="password" type="password" required placeholder="Password"></Form.Control>
            <Form.Control value={password2} onChange={handlePasswordChange2} name="password" type="password" placeholder="Password2"></Form.Control>
            
            <button className="subbtn"onClick={loginHandler} type="submit">Submit</button>
           
            <p className="red center">{msg}</p>
      </div>
    </div>
    
            }
            
    
    </React.Fragment>
    )
}


export default AdminLogin
