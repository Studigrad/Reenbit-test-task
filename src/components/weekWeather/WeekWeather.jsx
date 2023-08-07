import React from "react";
import "./WeekWeather.css";
function WeekWeather(props) {
  return (
    <div class="day-column">
      <div class="weather-container">
        <p class="day-name">{props.day}</p>
        <div className="image-container">
          <img
            src={require(`./color/${props.icon}.png`)}
            alt="Rain Cloud Icon - Rain Icon@seekpng.com"
          />
          <p class="celsium">{props.maxTemp}&deg;/{props.minTemp}&deg;</p>
        </div>
      </div>
    </div>
  );
}

export default WeekWeather;
