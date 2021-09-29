import React, {useState, useEffect} from 'react'
import './admins.css'
import AdminLogin from '../Component/adminLogin'
import AddService from '../Component/addService'
import AdminTaskbar from '../Component/adminTaskbar'
import Loading from '../Component/Loading'

const Admins = () => {

    const [loggedIn, setLoggedIn] = useState();
    const [type, setType] = useState();
    const [loading, setIsLoading] = useState();
    
    const loginChange = (status, type) => {
        setIsLoading(true)
        setType(type)
        setLoggedIn(status)
        
        console.log("status: "+status+ type)
        setIsLoading(false)
    }

    let token = localStorage.getItem("adminToken")
    const loginCheck = async () => {
        setIsLoading(true);
        console.log("called");
        try{
        const response = await fetch('https://helping-backend.vercel.app/api/adminlogincheck' , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const responseData = await response.json();
        //console.log(responseData)
        if(response.ok) {
            setLoggedIn(true)
            setType(responseData.user.user.type)
            
        }
        else {
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
            loginCheck()
        }, []);
    } 
    App();


    
    

    return (
        <div>
        
        {loading && <Loading/>}
        
        {!loading && <AdminTaskbar loginChange={loginChange} login={loggedIn} />}
        {!loading && loggedIn && <p></p>}
        {!loading && !loggedIn &&<AdminLogin login={loginChange}/>}
        {!loading && loggedIn && type && <AddService type={type}/>}


        </div>
    )
}

export default Admins