import React from "react"
import './footer.css'

import logo from './images/logo.png'
import facebook_logo from './images/facebook.svg'
import instagram_logo from './images/instagram.svg'


const Footer = () => {
    return (
     <div id="footer_container">
      
      <div id="footer_c1">
        <img id="logo_icon" src={logo}></img>
        <img id="social_icon" src={facebook_logo}></img>
        <img id="social_icon2" src={instagram_logo}></img>
      </div>

      <div id="footer_c2">
        <h1>Contact Us</h1>
        <strong>623-251-8769</strong>
        <strong>brockbozzuto@gmail.com</strong>
        <strong>123 Testng Way, Scottsdale Arizona</strong>
        <strong>Hours: Monday - Friday 8a - 5p </strong>
      </div>

      <div id="footer_c3">
        <h1>NewsLetter</h1>
        <input placeholder="First Name"></input>
        <input placeholder="Last Name"></input>
        <input placeholder="Email"></input>
      </div>

     

     </div>
    );
  };
  
  export default Footer;