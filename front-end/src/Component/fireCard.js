import React from 'react'
import './userCard.css'
import './fireCard.css'

const FireCard =(props) =>
{
    const data = props.data
    const userNow = props.user
    
    const Users = data.map((user) =>

    <div className="uCard" key={user.id}>
        <p>ID: <a target="_blank" href={"/fire_services/"+user.id}>{user.id}</a></p>
        <p>Email: {user.email}</p> 
        <p>Phone: {user.phone}</p>
        <p>LAT: {user.lat}</p>
        <p>LNG: {user.lng}</p>
        <p>Address: {user.address}, {user.thana}, {user.district}</p>
        <p>Added By: {user.addedBy}</p>
    </div>
    
    );


    return(
        <div>
            <div>{Users}</div>
        </div>

    )
}
export default FireCard;