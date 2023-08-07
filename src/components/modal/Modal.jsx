import React, { useState } from 'react';
import cities from './cities.json';
import './Modal.css'

function Modal(props) {
const [city,setCity] = useState('Please select a city')
const [start,setStart] = useState('')
const [end,setEnd] = useState('')
const handleChangeCity = (e) => {
    setCity(e.target.value);
  };
  const handleChangeStart = (e) => {
    setStart(e.target.value);
  };
  const handleChangeEnd= (e) => {
    setEnd(e.target.value);
  };
    const closeModal = () =>{
        props.setModal(false)
    }
    const newTrip = () => {
        props.addNewTrip(city,start,end)
        closeModal();
    }
    return (
        <div className='backshadow'>
            <div className='custom-modal'>
                <div className='title'>Create trip</div>
                <div className='close-modal' onClick={closeModal}>x</div>
                <hr />
                <div className='form-group'>
               
                    <label for="city">City</label>
                    <div>
                    <select id="country" name="country" onChange={handleChangeCity} value={city} >
                        <option disabled selected>Please select a city</option>
                        {cities.map((el)=>{
                            return (<option value={el.name}>{el.name}</option>)
                        })}  
                    </select>
                    </div>
                    
                   
                    <label for="start">Start date</label>
                    <div className='select-date'><input type="date" onChange={handleChangeStart} id="start" name="start" value={start} required/></div>
                    
                    <label for="end">End date</label>
                    <div className='select-date'><input type="date" onChange={handleChangeEnd} id="end" name="end"  value={end} required/></div>

                    <div className='sbm-btn'>
                        <button onClick={closeModal}>Cancel</button>
                        <button onClick={newTrip}>Save</button> 
                    </div>
                       
                </div>
            </div>
        </div>
    );
}

export default Modal;