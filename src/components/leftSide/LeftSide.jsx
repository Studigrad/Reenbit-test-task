import React, { useEffect } from "react";
import { useState } from "react";
import "./LeftSide.css";
import TripCard from "../tripCard/TripCard";
import WeekWeather from "../weekWeather/WeekWeather";
import CreateTrip from "../createTrip/CreateTrip";
function LeftSide(props) {
  return (
    <div className="LeftSide">

      <div class="flex-container">
        <div class="flex-item row1">Weather <span class="bolded">Forecast</span></div>
        <div class="flex-item row2">
          <input
            type="text"
            placeholder="Search your trip"
            className="full-width-input"
            value={props.searchQuery}
            onChange={props.handleSearchChange}
          />
        </div>

        <div class="flex-item row3">
          <div class="columns-container">
            { 
            props.filteredTripCards.map((tripCard) => (
              <TripCard
                key={tripCard.id}
                onHandleTripClick={() => props.onHandleTripClick(tripCard.id)}
                highlighted={tripCard.highlighted}
                city={tripCard.city}
                start={tripCard.startTrip}
                end={tripCard.endTrip}
              />
            ))
            
            }
          </div>

          <div class="columns-container2">
              <CreateTrip addNewTrip={props.addNewTrip}/>
          </div>
        </div>

        <div class="flex-item row4">
          <p>Week</p>
        </div>

        <div class="flex-item row5">
          <div class="columns-container-weather">
            {props.weather.map((w, id) => (
              <WeekWeather
                key={id}
                day={w.day}
                maxTemp={w.maxTemp}
                minTemp={w.minTemp}
                icon={w.icon}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default LeftSide;
