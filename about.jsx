import React from "react"
import checkerFlag from './images/flag.jpg'
import './about.css'

import innovate from './images/innovation.svg'
import passion from './images/passion.svg'
import environment from './images/environment.svg'
import customer from './images/customer.svg'
import trust from './images/trust.svg'

const About = () => {
    return (
      <div id="about_container">

        <div id="hero_card">
          HERO CARD
        </div>


        <h1>COMPANY NAME</h1>
        <p>Welcome to [Company Name], where we 
          redefine luxury driving experiences. Our 
          passion is to provide enthusiasts with the 
          thrill of a lifetime by offering exclusive
          supercar rentals at iconic tracks worldwide.
          With a commitment to excellence, we ensure
          an all-inclusive service that caters to every
          detail, allowing you to focus solely on the 
          exhilaration of the track. Join us on a journey 
          where speed meets sophistication, and make memories
          that rev beyond the ordinary. Welcome to the 
          ultimate driving adventure with [Company Name].</p>
          
        <h1>OUR DIFFERENCE IS OUR CORE VALUES</h1>
          

          <div id="different_images">
            <div id="img1">
              <img src={passion}></img>
              <p>Passion for Excellence</p> 
            </div>

            <div id="img2">
              <img src={customer}></img>
              <p>Customer-Centric Approach</p>   
            </div>

            <div id="img3">
              <img src={innovate}></img>
              <p>Innovation and Adventure</p>   
            </div>

            <div id="img4">
              <img src={trust}></img>
              <p>Transparency and Trust</p>   
            </div>

            <div id="img5">
              <img src={environment}></img>
              <p>Environmental Responsibility</p>   
            </div>
          </div>
      
        <div id="contactUs">
          <h1>To know more about our service</h1>
          <button>Contact Us Today!</button>
          <button>Send an Email</button>
        </div>
        
        
      </div>
    );
  };
  
  export default About;