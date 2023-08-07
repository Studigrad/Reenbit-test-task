import React from 'react';
import Timer from '../countDownTimer/Timer';
import './RightSide.css'
function RightSide(props) {

    const getDay = ()=>{
        const dayOfWeekName = new Date().toLocaleString('en-US', {weekday: 'long'})
        return dayOfWeekName;
    }

    return (
        <div className='RightSide'>
            <div className='info'>
                <h1 className='day'>{getDay()}</h1>
                <div className='temp'>
                    <img
                        src={require(`../weekWeather/color/${props.icon}.png`)}
                        alt="Rain Cloud Icon - Rain Icon@seekpng.com"
                        
                    />
                    <span>{props.temp}&deg;</span>
                </div>    
                <p className='city'>{props.cardInfo.city}</p>
                <Timer startDate={props.cardInfo.startTrip} endDate={props.cardInfo.endTrip} />
            </div>
            
        </div>
    );
}

export default RightSide;