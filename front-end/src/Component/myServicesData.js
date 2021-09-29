import React from 'react'
import './userCard.css'
import "./myServicesData.css"

const MyServicesData =(props) =>
{
    const data1 = props.data.data
    const data2 = props.data.data2
    console.log("data",data1)
    console.log("data2",data2)
    
    const Fire = data1.map((user) =>

    <div className="data" key={user.id}>
        <p>Service Type: Fire Service</p>
        <p>Service ID: <a target="_blank" href={"/fire_services/"+user.serviceid}>{user.serviceid}</a></p> 
        <p>Status: {user.status}</p>
        <p>Creation Time: {user.creation_time}</p>
    </div>
    
    );
    const Police = data2.map((user) =>

    <div className="data" key={user.id}>
        <p>Service Type: Police Station</p>
        <p>Service ID: <a target="_blank" href={"/police_stations/"+user.serviceid}>{user.serviceid}</a></p> 
        <p>Status: {user.status}</p>
        <p>Creation Time: {user.creation_time}</p>
    </div>
    
    );


    return(
        <div className="data-1">
            <br/>
            <div>{Fire}</div>
            <div>{Police}</div>
        </div>

    )
}
export default MyServicesData;