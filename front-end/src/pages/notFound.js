import React from 'react'
import './notFound.css'
import error from "../images/error.jpg"

const NotFound = () =>{
    return(
        <div>
            <img src={error} id="error" alt=" 404-address not found"/>
        </div>
    )
}

export default NotFound