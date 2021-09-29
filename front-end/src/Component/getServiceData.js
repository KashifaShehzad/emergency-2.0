import React, {useState} from 'react'
import './getServiceData.css'
import Loading from './Loading'

const GetServiceData = (props) =>{

    const [isLoading, setIsLoading] = useState();
    const [msg, setMsg] = useState();
    const data = props.data
    const type= props.type
    const token = localStorage.getItem("token")
    const [createdServiceId, setCreatedServiceId] = useState();

    const createService = async (serviceId) => {
        setIsLoading(true)

        try{
        const response = await fetch('https://helping-backend.vercel.app/api/service' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                type, serviceId
            })
            
        });
        const responseData = await response.json();
        if(response.ok) {
            setCreatedServiceId(responseData.data);
            setMsg("Please Don't Panik, We're on the way")
        }
        else if (response.status===405) {setMsg("Required Data Error")}
        else if (response.status===500) {setMsg("Database Error")}
        else {setMsg("Something Bad, Contact Developers");}
        setIsLoading(false)
        
    }
    catch {
        setIsLoading(false)
    }
    }

    
    const Users = data.map((data) =>

    <div className="class" key={data.id}>
        <button className="center" onClick={()=>createService(data.id)}>Click to Get HELP</button> <br/><br/>
        <p>ID: {data.id}</p>
        <p>Full address: {data.address}, {data.thana}, {data.district}</p>
        <p>Email: {data.email}</p> 
        <p>Phone: {data.phone}</p>
        <p>Added By: {data.addedBy}</p>
    </div>
    
    );


    return(
        <React.Fragment>

        {isLoading && <Loading/>}
        
        {!isLoading &&
        <div>
            <p> {msg}</p>
            {!isLoading && createdServiceId && <p className="center">Service Creation ID: {createdServiceId}</p>}
            <div>{Users}</div>
        </div>}
        </React.Fragment>
        
        

    )
}

export default GetServiceData