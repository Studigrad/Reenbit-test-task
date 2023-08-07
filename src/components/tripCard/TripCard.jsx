import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./TripCard.css";

function TripCard(props) {
  const [image, setImage] = useState("");

  const getImage = async () => {
    try{
      const res = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${props.city.toLowerCase()}/images/`
      );
      console.log('get')
      setImage(await res.data.photos[0].image.mobile);
    }catch(e){
      console.log(e)
      setImage('');
    }
    
  
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
  
    return `${day}.${month}.${year}`;
  }


  useEffect(() => {
    getImage();
  }, []);



  return (
    <div className={`column ${props.highlighted ? "highlight" : ""}`}>
      <div
        className={`trip-container ${props.highlighted ? "selected" : ""}`}
        onClick={props.onHandleTripClick}
      >
        <img src={image !== '' ? image : require('./notfound.jpg')} alt="City Image" />
        <div className="trip-info">
          <p className="city-name">{props.city}</p>
          <p className="trip-dates">
            {formatDate(props.start)} - {formatDate(props.end)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TripCard;
