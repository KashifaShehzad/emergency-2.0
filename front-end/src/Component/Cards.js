import React from 'react';
import "./cards.css"
import {  Button} from 'react-bootstrap';


function Cards(props) {
    return (
      <React.StrictMode>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="my pic" className="card_img"/>
          <div className="card_info">
            <h3 className="card_title">{props.title}</h3>
            <a href={props.link} target="_blank">
              <div className="bt">
              <Button>Find services </Button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </React.StrictMode>
    )
  }
export default Cards  