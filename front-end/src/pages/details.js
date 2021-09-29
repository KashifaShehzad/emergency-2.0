import React, {useState, useEffect} from 'react'
import './details.css'
import Loading from '../Component/Loading'
import ServiceProfile from '../Component/serviceProfile'
import {useParams} from "react-router-dom"

const Details = (props) => {

    const [isLoading, setIsLoading] = useState();
    const [data, setData] = useState();

    let token = localStorage.getItem("token")
    const type = props.type
    const {id} = useParams();

    const getDetails = async () => {
        setIsLoading(true);
        try{
        const response = await fetch('https://helping-backend.vercel.app/api/details' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                type, id
            })
        });
        
        const responseData = await response.json();
        setData(responseData.data)
        if(response.ok) {
            
            
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

    function App() {
        useEffect(() => {
            getDetails()
        }, []);
    } 
    App();


    
    return (
        <React.Fragment>
        {isLoading && <Loading/>}
        {!isLoading && data &&
        <ServiceProfile data={data}/>
        }
        {!isLoading && !data && <p>Sorry, No data found</p>}
        </React.Fragment>
    )
}

export default Details