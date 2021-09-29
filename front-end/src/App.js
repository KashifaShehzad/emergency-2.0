import React from 'react';
import Home from './pages/home'
import Services from './pages/services';
import Signup from './pages/signup';
//import AddServices from './pages/addServices'
import DemoLogin from './pages/DemoLogin'
import Users from './pages/users'
import Taskbar from './Component/taskbar'
import PoliceStations from './pages/policeStations'
import FireServices from './pages/fireServices'
import GetService from './pages/getService'
import Admins from './pages/admins'
import Profile from './pages/profile'
import NotFound from './pages/notFound'
import Details from './pages/details'
import SocialLogin from './pages/socialLogin'
import MyServices from './pages/myServices';
import EditUser from './pages/editUser'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';



const App = () => {
  return (
    <React.Fragment>
    
    <Router>
      <Switch>
      <Route path="/social" exact>
      <Taskbar/>
        <SocialLogin/>
      </Route>
      <Route path="/users" exact>
      <Taskbar/>
        <Users/>
      </Route>
      <Route path="/profile" exact>
      <Taskbar/>
        <Profile/>
      </Route>
      <Route path="/admin" exact>
        
        <Admins/>
      </Route>
      <Route path="/myservices" exact>
      <Taskbar/>
        <MyServices/>
      </Route>
      <Route path="/get_service" exact>
      <Taskbar/>
        <GetService/>
      </Route>
      <Route path="/" exact>
      <Taskbar/>
        <Home/>
      </Route>
      <Route path="/police_stations" exact>
      <Taskbar/>
        <PoliceStations/>
      </Route>
      <Route path="/police_stations/:id" exact>
      <Taskbar/>
        <Details type="police"/>
      </Route>
      <Route path="/fire_services/:id" exact>
      <Taskbar/>
        <Details type="fire"/>
      </Route>
      <Route path="/fire_services" exact>
      <Taskbar/>
        <FireServices/>
      </Route>
      <Route path="/services" exact>
      <Taskbar/>
        <Services/>
      </Route>
      
      <Route path="/demo" exact>
      <Taskbar/>
        <DemoLogin/>
      </Route>

      <Route path="/edit" exact>
      <Taskbar/>
        <EditUser/>
      </Route>

      <Route path="/signup" exact>
        <Signup/>
      </Route>
      <Route path="/">
      <Taskbar/>
        <NotFound/>
      </Route>
      </Switch>
      </Router>
      
      </React.Fragment>
  );
}

export default App;
