import React, {useState} from 'react'
import MyServicesData from '../Component/myServicesData'
import Loading from '../Component/Loading'
import '../Component/myServicesData.css'

const MyServices =  () => {

    const [allUsers, setUsers] = useState();
    const [currentUser, setCurrentUser] = useState();
    const [isLoading, setIsLoading] = useState();
    const [loggedIn, setLoggedin]= useState(false);

    let token = localStorage.getItem("token")

    const getUsers = async () => {
        setIsLoading(true);
        console.log("called");
        try{
        const response = await fetch('https://helping-backend.vercel.app/api/myservices' , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        
        const responseData = await response.json();
        console.log(responseData)
        if(response.ok) {
            setLoggedin(true)
            setUsers(responseData)
            //console.log(allUsers)
            setCurrentUser(responseData.user.user)
            
        }
        else {
            console.log("Error")
        }
          
        }
        catch {
            console.log("Catch")
        }
        setIsLoading(false)
        
        
    };

    return (
        <div>
            
            {isLoading && <Loading/>}
            {!loggedIn && <p>Please log in to view</p>}
            {!isLoading &&
            <div >
            <button  id="containerS" onClick={getUsers}>Get my service data</button>
            {allUsers &&
            <div>
            <MyServicesData data = {allUsers} user = {currentUser}/>
            </div>}
            </div>
            }
        </div>
    )

}

export default MyServices