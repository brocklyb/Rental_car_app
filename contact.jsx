import React from "react"
import './contact.css'

const Contact = () => {
    return (
     <div id="contact_container">
      <h2>Contact Us</h2>

      <div>
        <h2>Get In Touch</h2>
        <input placeholder="First Name"></input>
        <input placeholder="Last Name"></input>
        <br></br>

        <input placeholder="Email"></input>
        <input placeholder="Your Phone"></input>
        <br></br>

        <input placeholder="Your Company"></input>
        <label for="distanceDropdown">Subject:</label>

            <select id="distanceDropdown">
              <option value="1">Need a quote</option>
              <option value="2">Careers</option>
              <option value="5">General information request</option>
              <option value="10">Need a callback</option>
              <option value="20">Other</option>
            </select>
        <br></br>

        <input placeholder="Message"></input>
        <button>Submit</button>

      </div>

     </div>
    );
  };
  
  export default Contact;