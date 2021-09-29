import React from "react";
import "./userProfile.css";
import { Form, Card, Button } from "react-bootstrap";


const UserProfile = (props) => {
  const data = props.data;

  return (
    <div className="profile" key={data.id}>
      <Card className="width" style={{ width: "40%" }}>
        <Card.Header
          style={{ height: "50px", textAlign: "center", fontSize: "20px" }}
        >
          My profile
        </Card.Header>
        <Card.Body>
        <Card.Text>
            <p>ID: {data.id}</p>
            <p>Full Name: {data.first_name} {data.last_name}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Phone Extra: {data.phone_extra}</p>
            <p>Blood Group: {data.blood}</p>
            <p>Gender: {data.gender}</p>
            <p>Address: {data.address}</p> 
            <p>Thana: {data.thana}</p>    
            <p>District: {data.district}</p>  
            </Card.Text>
        </Card.Body>
        <Card.Footer style={{ height: "70px" }}>
    
        </Card.Footer>
      </Card>
    </div>
  );
};

export default UserProfile;
