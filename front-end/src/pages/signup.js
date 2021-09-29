import React, { useState } from 'react'
import './signup.css';


function Signup() {
    const [firstName,setFname]=useState("");
    const [lastName,setLname]=useState("");
    const [password,setPassword]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [address,setAddress]=useState("");
    const [firstErr,setFnameErr]=useState(false);
    const [lastErr,setLnameErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    const [phoneErr,setPhoneErr]=useState(false);
    const [addressErr,setAddressErr]=useState(false);

  function signupHandler(e)
    {
        if(firstName.length<3 ||lastName.length<3 || password.length<3 || phoneNumber.length<11 || address.length<3 )
        {
            alert("type correct values")
        }
        else
        {
            alert("all good :)")
        }

        e.preventDefault()
    }
    function fnameHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setFnameErr(true)
        }
        else
        {
            setFnameErr(false)
        }
        setFname(item)
    }

    function lnameHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setLnameErr(true)
        }
        else
        {
            setLnameErr(false)
        }
        setLname(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)

    }

    function phoneHandler(e){
        let item=e.target.value;
        if(item.length<11 )
        {
           setPhoneErr(true)
        }
        else
        {
            setPhoneErr(false)
        }
        setPhoneNumber(item)

    }

    function addressHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setAddressErr(true)
        }
        else
        {
            setAddressErr(false)
        }
        setAddress(item)
    }
    return (
        <div>
            <h1 className="heading">Signup</h1>
           <form onSubmit={signupHandler} className="form">
           <input type="text" placeholder="First name" onChange={fnameHandler} />{firstErr?<span>First name Not Valid</span>:""}
            <br /> <br />

            <input type="text" placeholder="Last name" onChange={lnameHandler} />{lastErr?<span>Last name Not Valid</span>:""}
            <br /> <br />

            <input type="text" placeholder="Address" onChange={addressHandler} />{addressErr?<span>Address Not Valid</span>:""}
            <br /> <br />

            <input type="password" placeholder="Enter User Password" onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}

            <br /> <br />

            <input type="number" placeholder="Enter phone number" onChange={phoneHandler}/>{phoneErr?<span>Phone Number Not Valid</span>:""}

            <br /> <br />

            <p>Blood:</p>
              <input type="radio" id="a+" name="blood" value="A+" required="required"/>
              <label for="a+">A+</label>
              <input type="radio" id="b+" name="blood" value="B+" required="required"/>
              <label for="b+">B+</label>
              <input type="radio" id="ab+" name="blood" value="AB+" required="required"/>
              <label for="ab+">AB+</label>
              <input type="radio" id="o+" name="blood" value="O+" required="required"/>
              <label for="o+">O+</label><br/> <br/>

            <p>Gender:</p>
              <input type="radio" id="male" name="gender" value="Male" required="required"/>
              <label for="male">Male</label>
              <input type="radio" id="fmale" name="gender" value="Fmale" required="required"/>
              <label for="fmale">Female</label>

            <br/> <br/>   

            <label for="location">Choose your district:</label><br/><br/>
                <select id="location" name="location list" form="location form">
                <option value="Dhaka">Dhaka</option>
                <option value="Jessore">Jessore</option>
                <option value="Khulna">Khulna</option>
                <option value="borisal">borisal</option>
                </select><br/><br/>

                <label for="location">Choose your thana:</label><br/><br/>
                <select id="location" name="location list" form="location form">
                <option value="Dhaka">Sharsha</option>
                <option value="Jessore">Jessore</option>
                <option value="Khulna">Khulna</option>
                <option value="borisal">borisal</option>
                </select><br/><br/>

            <button type="submit">Signup</button>
           </form>
        </div>
    )
}

export default Signup;