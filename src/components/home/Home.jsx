import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import LeftSide from "../leftSide/LeftSide";
import RightSide from "../rightSide/RightSide";
import "./Home.css";
import { findWeather } from '../../utils/api';  
import {getUpdateTripCards} from '../../utils/helpers'
function Home(props) {

  const [rightBar,setRightBar] = useState({background:'sunny',text:'',city:''})
  
  const [searchQuery, setSearchQuery] = useState('');

  const [weather, setWeather] = useState([
    { day: "Sunday", maxTemp: "27", minTemp: "18", icon: "clear-day" },
    { day: "Monday", maxTemp: "27", minTemp: "18", icon: "clear-day" },
    { day: "Tuesday", maxTemp: "27", minTemp: "18", icon: "clear-day" },
    { day: "Wednesday", maxTemp: "27", minTemp: "18", icon: "clear-day" },
    { day: "Thursday", maxTemp: "27", minTemp: "18", icon: "clear-day" },
    { day: "Friday", maxTemp: "27", minTemp: "18", icon: "clear-day" },
    { day: "Saturday", maxTemp: "27", minTemp: "18", icon: "clear-day" },
  ]);

  const [tripCards, setTripCards] = useState([
    { id: 1, highlighted: false, city: "Berlin", startTrip: "2023-08-03", endTrip: "2023-09-03" },
    { id: 2, highlighted: true, city: "Tokyo", startTrip: "2023-08-03", endTrip: "2023-09-03" },
    {
      id: 3,
      highlighted: false,
      city: "Barcelona",
      startTrip: "2023-09-01",
      endTrip: "2023-09-09",
    }
  ]);

  const [filteredTripCards, setFilteredTripCards] = useState(tripCards);


  const addNewTrip = (city,start,end)=>{
    setTripCards([...tripCards,{city,startTrip:start,endTrip:end,highlighted:false,id:tripCards.length+1}])
  }

  const selectedTripCard = () => {
    return tripCards.find((tripCard) => tripCard.highlighted === true);
  };

  const setCityWeatherAndInfo = (data) => {
    let days = data.days;
    const newWeather = [...weather];
    for (let i = 0; i < 7; i++) {
      let dt = new Date(days[i].datetime);
      newWeather[dt.getDay()].maxTemp = days[i].tempmax;
      newWeather[dt.getDay()].minTemp = days[i].tempmin;
      try{
        newWeather[dt.getDay()].icon = days[i].icon;
      }catch(e){
        newWeather[dt.getDay()].icon = 'cloudy';
      }
      
    }
    setWeather([...newWeather]);
    setRightBar({background:data.currentConditions.icon,text:data.currentConditions.conditions,city:data.address})
  };

  const onHandleTripClick = (id) => {
    setTripCards(getUpdateTripCards(tripCards,id));
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    // Filter the trip cards based on the search query
    const filteredTripCards = tripCards.filter(trip =>
      trip.city.toLowerCase().includes(query)
    );
    setFilteredTripCards(filteredTripCards);
  };

  const updateInformation = async() =>{
    setCityWeatherAndInfo(await findWeather(selectedTripCard().city));
 }
 
 useEffect(() => {
  const storedTrips = localStorage.getItem('trips');
  if (storedTrips) {
    setTripCards(JSON.parse(storedTrips));
  } else {
    setFilteredTripCards(tripCards);
  }
}, []);

  useEffect(() => {
    updateInformation();
    setFilteredTripCards(tripCards)
    localStorage.setItem('trips', JSON.stringify(filteredTripCards));
  }, [tripCards]);

 

  return (
    <div className="Home">
      <div className="split-container">
        <div className="split-item left">
          <LeftSide
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            tripCards={tripCards}
            onHandleTripClick={onHandleTripClick}
            weather={weather}
            addNewTrip={addNewTrip}
            handleSearchChange={handleSearchChange}
            filteredTripCards={filteredTripCards}
          />
        </div>
        <div className="split-item right">
          <RightSide rightBar={rightBar} cardInfo={selectedTripCard()} icon={weather[new Date().getDay()].icon} temp={weather[new Date().getDay()].maxTemp}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
