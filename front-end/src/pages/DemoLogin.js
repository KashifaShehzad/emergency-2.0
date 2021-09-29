import React, {useState, useEffect} from 'react';
import './DemoLogin.css'
import Services from './services'
import Loading from '../Component/Loading'
//import Login from '../Component/Sdata/Login'
import {facebookProvider, googleProvider} from '../config/authMethods'
import socialMediaAuth from '../config/auth'
import { Form, Button} from 'react-bootstrap';


const DemoLogin = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [district, setDistrict] = useState();
    const [loggedIn, setLoggedIn] = useState(false);
    const [signUpMode, setSignUpMode] = useState(false);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [msg, setMsg] = useState();
    const [isLoading, setIsLoading] = useState();
    const [phone, setPhone] = useState();
    const [data, setData] = useState();
    const [img, setImg] = useState();
    const[type, setType] = useState();
    let token = localStorage.getItem("token")
    const loginCheck = async () => {
        setIsLoading(true);
        console.log("called");
        try{
        const response = await fetch('https://helping-backend.vercel.app/api/userlogincheck' , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const responseData = await response.json();
        if(response.ok) {
            setLoggedIn(true)
            setData(responseData.user.user.name)
        }
        else {
            setLoggedIn(false)
            console.log("Token Error")
        }
        }
        catch {
            console.log("Catch")
        }
        setIsLoading(false)
    };
    function App() {
        useEffect(() => {
            if(token){
                loginCheck()
            }
            
        }, []);
    } 
    App();
    const signUpHandler = async e => {
        setIsLoading(true)
        e.preventDefault();

        try{
        const response = await fetch('https://helping-backend.vercel.app/api/' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                phone: phone,
                email: email,
                password: password,
                district
            })
            
        });
        //const resposneData = await response.json();
        console.log(response)
        if(response.ok) {setSignUpMode(false); setMsg("Signp Successfull. Please Login")}
        else if (response.status===400) {setMsg("Email already exists")}
        else if (response.status===401) {setMsg("Phone already exists")}
        else {setMsg("Something Bad, Contact Developers");}
        setIsLoading(false)
        
    }
    catch {
        setIsLoading(false)
    }
    }

    const loginHandler = async e => {
        setIsLoading(true)
        console.log(e)
        if(e) {e.preventDefault()}

        try{

        const response = await fetch('https://helping-backend.vercel.app/api/login' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                type: type
            })
            
        });
        const responseData = await response.json();
        if(response.ok) {
            setLoggedIn(true)
            setData(responseData.name)
        }
        else {setMsg("Wrong Credentials")}
        setIsLoading(false)
        localStorage.setItem("name", JSON.stringify(responseData.session))
        localStorage.setItem("token", JSON.stringify(responseData.jsontoken))
        
    }
    catch {
        setIsLoading(false)
    }
    
    
    };
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const firstNameChange = e =>{
        setFirstName(e.target.value);
    }
    const lastNameChange = e =>{
        setLastName(e.target.value);
    }
    const phoneChange =  e =>{
        setPhone(e.target.value);
    }
    const districtChange =  e =>{
        setDistrict(e.target.value);
    }
    const modeToggle = () => {
        setSignUpMode(!signUpMode)
    }

    const handleOnClick = async (provider)=>{
        const res = await socialMediaAuth(provider)
        if(res.uid){
        setIsLoading(true)

        try{

        const response = await fetch('https://helping-backend.vercel.app/api/login' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: res.email,
                password: "password",
                type: "social"
            })
            
        });
        const responseData = await response.json();
        if(response.ok) {
            setLoggedIn(true)
            setData(responseData.name)
        }
        else {setMsg("You are not Registered!!")}
        setIsLoading(false)
        localStorage.setItem("name", JSON.stringify(responseData.session))
        localStorage.setItem("token", JSON.stringify(responseData.jsontoken))
        
    }
    catch {
        setIsLoading(false)
    }

        }
        else{setMsg("User not found")}
    }
    return(
        <React.Fragment>
            {!isLoading && loggedIn && <Services data={data}/>}
            {!isLoading && !loggedIn && 
   
        <div className="App"> 
        <div className="container"> 
        <div class="row">
            <h2 style={{textAlign:'center'}}>Login with Social Media or Manually</h2>
            <div class="vl">
                <span class="vl-innertext">or</span>
            </div>
                {!isLoading && !loggedIn && 
                  <div class="col">
                    <Button className="fb"onClick={()=>handleOnClick(facebookProvider)}>Facebook</Button>
                    <Button className="google"onClick={()=>handleOnClick(googleProvider)}>Google</Button>
            
                </div>}
            <div class="col">
                    <div class="hide-md-lg">
                    <p>Or sign in manually:</p>
                    </div>
                                
                {signUpMode &&   
                
                <div>        
                    
                    <Form.Control name="first_name" value={firstName} onChange={firstNameChange} type="text" placeholder="First name"></Form.Control>
                    <Form.Control name="last_name" value={lastName} onChange={lastNameChange} type="text" placeholder="Last Name"></Form.Control>

                    <Form.Control name="phone" value={phone} onChange={phoneChange} type="phone" required placeholder="Phone"></Form.Control>
                    
                    <Form.Control name="district" value={district} onChange={districtChange} type="text" required placeholder="District"></Form.Control>
            

                </div>}

                <div>
                
                    <Form.Control name="email" onChange={handleEmailChange} type="email" required placeholder="Email"></Form.Control>

                    <Form.Control onChange={handlePasswordChange} name="password" type="password" required placeholder="Password"></Form.Control>

                    <Button className="signup" onClick={modeToggle}>{signUpMode? 'Login' : 'Sign Up'}</Button>
                </div>
            </div>    
            </div>

            <div class="bottom-container">
              <div class="row">
                <div class="col">
                
                <Button className="submit"onClick={signUpMode? signUpHandler : loginHandler } type="submit">Submit</Button>
                <p className="red center">{msg}</p>
                  </div>
              </div>
            </div>
        </div>

            

                {isLoading && <Loading/>}
                
              
                {!isLoading && loggedIn && <Services data={data}/>}
            
        </div>
            }


    
    </React.Fragment>
    )
}

export default DemoLogin;