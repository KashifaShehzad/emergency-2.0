import React, {useState, useEffect} from 'react'
import Loading from './Loading'
import './addService.css'
import { Form , Card, Button} from 'react-bootstrap';

const AddService = (props) => {

    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState();
    const [msg, setMsg] = useState();
    const [phone, setPhone] = useState();
    const [phone_extra, setPhone_extra] = useState();
    const [district, setDistrict] = useState();
    const [thana, setThana] = useState();
    const [address, setAddress] = useState();
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [email, setEmail] = useState();
    const [type, setType] = useState();
    
    let insertId;
    let token = localStorage.getItem("adminToken")

    const signUpHandler = async e => {
        setIsLoading(true)
        e.preventDefault();
        console.log("called signup");
        //https://helping-backend.vercel.app/api/
        try{
        const response = await fetch('http://localhost:5000/api/add_service' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
              type:props.type, district, thana, address, phone, phone_extra, lat, lng, password,email
            })
            
        });
        const responseData = await response.json();
        insertId = responseData.data.insertId
        if(response.ok) {
             setMsg("Data Inserted at ID: " + insertId)}
        else if (response.status===405) {setMsg("Required Data Error")}
        else if (response.status===500) {setMsg("Database Error")}
        else {setMsg("Something Bad, Contact Developers");}
        setIsLoading(false)
        
    }
    catch {
        setIsLoading(false)
    }
    }
    
    const districtChange = e => {
        setDistrict(e.target.value);
    }

    const thanaChange = e => {
        setThana(e.target.value);
    }

    const addressChange = e => {
        setAddress(e.target.value);
    }
    
    const latChange = e => {
        setLat(e.target.value);
    }

    const lngChange = e => {
        setLng(e.target.value)
    }

    const emailChnage = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const phoneChange =  e =>{
        setPhone(e.target.value);
    }

    const phoneChange2 =  e =>{
        setPhone_extra(e.target.value);
    }

    const OneTimeChange = () =>{
        useEffect(()=>{
            if(props.type === 'fire'){
                setType('Fire Service')
            }
            else if(props.type === 'police'){
                setType('Police Station')
            }
        }, [])
    }
    
    OneTimeChange();
    console.log(type)

    return(
    <div>
        {isLoading && <Loading/>}
        {!isLoading &&
        
        <div className="Apps">
            <p className="hello">Hello Admin</p>
            <p>You can add a {type}</p>
            <Form.Control name="district" value={district} onChange={districtChange} type="text" placeholder="District"></Form.Control>
            
            <Form.Control name="thana" value={thana} onChange={thanaChange} type="text" placeholder="Thana"></Form.Control>
            
            <Form.Control name="address" value={address} onChange={addressChange} type="text" placeholder="Address"></Form.Control>
            
            <Form.Control name="email" value={email} onChange={emailChnage} type="email" placeholder="Email"></Form.Control>
            
            <Form.Control name="phone" value={phone} onChange={phoneChange} type="phone" placeholder="Phone"></Form.Control>
           
            <Form.Control name="phone_extra" value={phone_extra} onChange={phoneChange2} type="phone" placeholder="Phone Extra"></Form.Control>
           
            <Form.Control name="lat" value={lat} onChange={latChange} type="number" placeholder="LAT"></Form.Control>
            
            <Form.Control name="lng" value={lng} onChange={lngChange} type="number" placeholder="LNG"></Form.Control>
            
            <Form.Control value={password} onChange={handlePasswordChange} name="password" type="password" placeholder="Password"></Form.Control>

            
            <Button id="center"onClick={signUpHandler } type="submit">Submit</Button>
           
            
            <p className="red center">{msg}</p>
        </div>  
            }
    </div>
    )
}

export default AddService