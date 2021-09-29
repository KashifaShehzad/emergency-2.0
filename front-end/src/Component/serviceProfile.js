import React from 'react'
import './serviceProfile.css'
import { Card } from 'react-bootstrap';

const ServiceProfile = (props) => {
    const data = props.data
    console.log(data)

    return(
        
        <div className="profile" key={data.id}>
            <Card className="width" style={{ width: '40%' }}>
            <Card.Header style={{ height: '50px', textAlign: 'center', fontSize:"20px"}}>
             Details
            </Card.Header>
            <Card.Body>
             <Card.Text>
            <p>ID: {data.id}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Phone Extra: {data.phone_extra}</p>
            <p>Address: {data.address}</p> 
            <p>Thana: {data.thana}</p>    
            <p>District: {data.district}</p>   
            <p>LAT: {data.lat}</p> 
            <p>LNG: {data.lng}</p> 
            <p>Added By: {data.addedBy}</p>
            </Card.Text>
            </Card.Body>
            <Card.Footer style={{ height: '50px' }}></Card.Footer>
            </Card>  
            
            
        </div>
    )

}

export default ServiceProfile