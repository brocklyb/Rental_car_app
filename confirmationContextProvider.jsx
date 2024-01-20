import React, { useState } from "react";

import confirmationContext from "./confirmationContext";

const ConfirmationContextProvider = ({ children }) =>{
    const [ rentalConfirmation, setRentalConfirmation ] = useState("RENTAL CONFIRMATION")

    return(
        <confirmationContext.Provider value={{rentalConfirmation,setRentalConfirmation}}>
            {children}
        </confirmationContext.Provider>
    )

}

export default ConfirmationContextProvider