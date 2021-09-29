import React, {useState} from 'react';
import Loading from '../Component/Loading'
import UserCard from '../Component/userCard';
import './users.css'



const Users = () => {

    const [allUsers, setUsers] = useState();
    const [isLoading, setIsLoading] = useState();
    const [loggedIn, setLoggedin]= useState(false);

    let token = localStorage.getItem("token")
    const name = localStorage.getItem("name")


    const getUsers = async () => {
        setIsLoading(true);
        //console.log("called");
        try{
        const response = await fetch('https://helping-backend.vercel.app/api/' , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        console.log(response)
        
        const responseData = await response.json();
        console.log(responseData)
        if(response.ok) {
            setLoggedin(true)
            setUsers(responseData.data)

            
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

    

    return(
        <React.Fragment>
            {isLoading && <Loading/>}
            {!loggedIn && <p>Please log in to view</p>}
            {!isLoading &&
            <div className="container">
            <p>{name}</p>
            <button onClick={getUsers}>GetUSers</button>
            {allUsers &&
            <div>
            <br></br>
            <UserCard data = {allUsers}/>
            </div>}
            </div>
            }
        </React.Fragment>
    )
}

export default Users;