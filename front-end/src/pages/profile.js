import React, {useState, useEffect} from 'react'
import Loading from '../Component/Loading'
import UserProfile from '../Component/userProfile'
import '../Component/userProfile.css'

const Profile = () => {

    const [loading, setIsLoading] = useState()
    const [userFound, setUserFound] = useState()
    const [userData, setUserData] = useState()
    const token = localStorage.getItem("token")
    const getProfile = async () => {
        setIsLoading(true);
        //console.log("called");
        try{
        const response = await fetch('https://helping-backend.vercel.app/api/profile' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        
        const responseData = await response.json();
        
        if(response.ok) {
            setUserFound(true)
            setUserData(responseData.data)
        }
        else {
            console.log("Error")
        }
          
        }
        catch {
            console.log("oops")
        }
        setIsLoading(false)
    };

    function App() {
        useEffect(() => {
            getProfile()
        }, []);
      } 
      App();

    return(
        <div>
            
            {loading && <Loading />}
            {!loading && userFound && <UserProfile data={userData}/>}
        </div>
    )
}

export default Profile