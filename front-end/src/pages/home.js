import React, {useState, useEffect} from 'react';
import './home.css'
import Loading from '../Component/Loading'
import img1 from '../images/home.png'
const Home = () => {

  const[isLoading, setIsLoading] =useState();
  const [temp, setTemp] =useState();
  const [aTemp, setAtemp] = useState();
  const getWeather = async () => {
    setIsLoading(true)

    console.log("called");
    try{
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e4bdd4326ac64b2987c93822211407&q=Dhaka&aqi=no' , {
        method: 'GET'
        
    });
    const responseData = await response.json();
    console.log(responseData);
    if(response.ok) {
      setTemp(responseData.current.temp_c)
      
      setAtemp(responseData.current.feelslike_c)
    }
    setIsLoading(false)
    
    
    }
      catch {
        setIsLoading(false)
        console.log("catch")
      }
    }

  

  function App() {
    useEffect(() => {
        getWeather()
    }, []);
  } 
  App();

  


    return(
      <div>
      {isLoading && <Loading />}
      {!isLoading &&
    <div className="Apps">
      <div className="col-lg-6 order-1 order-lg-2">
         <img src={img1} class="img-fluid " alt="Responsive image"></img>
      </div>
      <div id="text">
        <p className="col-md-6">Emergency Situation <br/>Handling System</p> 
        <p><b>Current Temperature in Dhaka: {temp}</b></p>
        <p><b>Feels Like: {aTemp}</b></p>
      </div>
    </div>
    }
    </div>
    )
}
export default Home;