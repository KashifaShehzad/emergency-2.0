import React, {useState} from 'react'
//import './adminLogin.css'
import Loading from './Loading'
import { Form } from 'react-bootstrap';
import '../Component/getServiceForm.css'


const GetServiceForm = (props) =>{
    
    const [serviceType, setServiceType] = useState("police");
    const[location, setLocation] = useState("Registered Location");
    const [msg, setMsg] = useState();
    const [isLoading, setIsLoading] = useState();
    let token = localStorage.getItem("token")


    const locationSetHandler= (e) =>{
        const val = e.target.value
        setLocation(val)
        const element= document.getElementById('color');
        if(val==='others')
            element.style.display='block';
        else  
            element.style.display='none';
        }

        const serviceSet= (e) => {
            setServiceType(e.target.value)
        }


        const getServiceNow = async (e) => {
            console.log(location, serviceType)
            setIsLoading(true)
            e.preventDefault();
            console.log("called signup");
            try{
                const response = await fetch('https://helping-backend.vercel.app/api/help' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    location, type:serviceType
                })
            
            });
            const responseData = await response.json();

            if(response.ok) { 
                if(responseData.data.length > 0) {
                setMsg("Data Found Successfully")
                console.log(responseData)
                props.assignUser(responseData.user)
                props.assignData(responseData.data)
                props.assignType(serviceType)
                }
                else {setMsg("Sorry, no data found")}
                
            }
            else if (response.status===400) {setMsg("Service Type Error")}
            else if (response.status===400) {setMsg("Error Help Type")}
            else {setMsg("Something Bad, Contact Developers");}
            setIsLoading(false)
 
        
        }
            catch {
                setIsLoading(false)
            }
        }
        
        const locationSet = (e) => {
            setLocation(e.target.value)
        }
        
    
    return(
        <React.Fragment>
        {isLoading && <Loading/>}
        {!isLoading &&
        <div className="App">
            <select name="serviceType" onChange={serviceSet}>
            <option value="service">Service type:</option>
                <option value="police">Police Station</option>
                <option value="fire">Fire Service</option>
                <option value="others">Others</option>
            </select>

            <select name="location" onChange={locationSetHandler} >
            <option value=" Location">Location:</option>
                <option value="Registered Location">Registered Location</option>
                <option value="others">Others</option>
            </select><br/>
            <Form.Control type="text" name="location" onChange={locationSet} placeholder="others" id="color"></Form.Control>
            <button type="submit" className="help" onClick={getServiceNow}>Get Help Now</button>
            <p>{msg}</p>
        </div>
        }
        </React.Fragment>
        
    )
}

export default GetServiceForm