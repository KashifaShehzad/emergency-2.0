import React, {useState, useEffect} from 'react';
import Loading from '../Component/Loading'
import PoliceCard from '../Component/policeCard';
import './users.css'
import './policeStations.css'
import police from "../images/police.jpg";



const PoliceStations = () => {

    const [allUsers, setUsers] = useState();
    const [currentUser, setCurrentUser] = useState();
    const [isLoading, setIsLoading] = useState();
    const [loggedIn, setLoggedin]= useState(false);
    
    let token = localStorage.getItem("token")
    const name = localStorage.getItem("name")

    function App() {
        useEffect(() => {
            if(token) {
                setLoggedin(true);
            }
        }, []);
      } 
      App();

    const getUsers = async () => {
        setIsLoading(true);
        //console.log("called");
        try{
        const response = await fetch('https://helping-backend.vercel.app/api/police' , {
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
            setUsers(responseData.data)
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
    //getUsers();
    console.log(currentUser)

    

    return(
        <React.Fragment>
            {isLoading && <Loading/>}
            {!loggedIn && <p>Please log in to view</p>}
            {!isLoading &&

            <div >
                 <img src={police} class="police " alt=""/>
            <div className="">
               
            <p className="name">{name}</p>
            <button className="get" onClick={getUsers}>Get Police Stations</button>
            {allUsers &&
            <div>
            <PoliceCard data = {allUsers} user = {currentUser}/>
            </div>}
            </div>
            </div>
            }
        </React.Fragment>
    )
}

export default PoliceStations;