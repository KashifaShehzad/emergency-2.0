import React from 'react'
import './userCard.css'

const UserCard =(props) =>
{
    const data = props.data
    
    const Users = data.map((user) =>

    <div className="User" key={user.id}>
        <p>ID: {user.id}</p>
        <p>Full Name: {user.first_name} {user.last_name}</p>
        <p>User Email: {user.email}</p> 
        <p>Phone: {user.phone}</p>
    </div>
    
    );


    return(
        <div>
            <div>{Users}</div>
        </div>

    )
}
export default UserCard;