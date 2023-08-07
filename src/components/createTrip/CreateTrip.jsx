import React, { useState } from 'react';
import './CreateTrip.css'
import Modal from '../modal/Modal';
function CreateTrip(props) {
    const [modal,setModal] = useState(false)
  
    return (
        <div class="column2">
        <button 
        class="add-trip-button" 
        onClick={()=>setModal(!modal)}>
          <span class="plus-icon">+</span>
          Add Trip
        </button>
        {modal ? <Modal setModal={setModal} addNewTrip={props.addNewTrip}/> : null}
            
      </div>
    );
}

export default CreateTrip;