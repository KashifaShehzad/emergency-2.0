import React, {useState, useEffect} from 'react'
import './taskbar.css'
import { Redirect  } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';

const Taskbar = () => {

    const [loggedIn, setIsLoggedIn] = useState();
    
    let token;
    
    function App() {
        useEffect(() => {
            token = localStorage.getItem("token")
            if (!token) {
                setIsLoggedIn(false)
            }
            else {
                setIsLoggedIn(true)
            }
        }, []);
    } 
    App();
    const logout = (e) => {
        if(loggedIn)
        {
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        console.log("called")
        return (
            <Redirect to="users"/>
        )
        
        }
        
    }

    return(
        <div className="taskbar">
            
            <Navbar bg="danger" expand="lg" variant='dark'>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link className="nav-link" href="/demo" onClick={logout}>{loggedIn? 'Logout': 'Login'}</Nav.Link>
                    <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                    {loggedIn &&<Nav.Link className="nav-link" href="/profile">My Profile</Nav.Link>}
                    <Nav.Link className="nav-link" href="admin">Admins</Nav.Link>
                    <Nav.Link className="nav-link" href="/myservices">My Services</Nav.Link>
                    <Nav.Link className="nav-link" href="/police_stations">Police Stations</Nav.Link>
                    <Nav.Link className="nav-link" href="/fire_services">Fire Services</Nav.Link>
                    <Nav.Link className="nav-link" href="/get_service">Get Services</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
           
        </div>
        
    )
}

export default Taskbar