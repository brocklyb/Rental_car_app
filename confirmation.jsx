import { useEffect, useContext } from 'react'
import React from "react"
import './contact.css'

import confirmationContext from './confirmationContext'




const Confirmation = () => {

  const {rentalConfirmation} = useContext(confirmationContext)

  const handleConfirmation =(e) =>{
    console.log(rentalConfirmation)
  }

      return(
      <div>
        <h1>CONFIRMATIOPN PAGE</h1>
        <button onClick={handleConfirmation}>ACCESS DATA</button>

        <h2>{rentalConfirmation.carName}</h2>
        <h2>{rentalConfirmation.trackname}</h2>
        <h2>{rentalConfirmation.trackname}</h2>

      </div>
      )

    }
    
  
  export default Confirmation;