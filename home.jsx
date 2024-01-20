import React, {useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import './home.css';


import confirmationPage from './confirmation'
import confirmationContext from './confirmationContext';
import bookRace from './book_race'


import porsche_img from './images/blue_porsche.jpeg'
import lambo_img from './images/lambo.jpeg'
import bmw_img from './images/bmw.jpg'
import mercedes_img from './images/merc.jpg'
import car5 from './images/ferarri.jpg'

import leguna_img from './tracks/leguna.jpg'
import zandvoort_img from './tracks/zand.jpg'
import coa_img from './tracks/coa.jpg'
import silverstone_img from './tracks/silverstone.jpg'
import singapore_img from './tracks/singapore.jpg'

import porscheText from './descriptions/porsche'
import lamboText from './descriptions/lambo'
import bmwText from './descriptions/bmw'
import mercText from './descriptions/merc'
import ferrariText from './descriptions/ferarri' 

import legunaText from './descriptions/leguna'
import zandvoortText from './descriptions/zandvoort'
import coaText from './descriptions/coa'
import silverstoneText from './descriptions/silverstone'
import singaporeText from './descriptions/singapore'

import finishLine from './tracks/finishLine.jpg'
import racecar from './images/race-car.png'
import speedo from './images/speedo.png'
import speedCar from './images/car.png'

import Footer from './footer'


function Home() {
    useEffect(() => {
        const fetchData = async () =>{
            //runs on app launch / imports all text files for track and car descriptions
            try{
                const response1 = await fetch(porscheText)
                const porsche_text = await response1.text()

                const response2 = await fetch(lamboText)
                const lambo_text = await response2.text()

                const response3 = await fetch(bmwText)
                const bmw_text = await response3.text()

                const response4 = await fetch(mercText)
                const mercedes_text = await response4.text()

                const response5 = await fetch(ferrariText)
                const ferrari_text = await response5.text()

                const response6 = await fetch(legunaText)
                const leguna_text = await response6.text()

                const response7 = await fetch(zandvoortText)
                const zandvoort_text = await response7.text()

                const response8 = await fetch(coaText)
                const coa_text = await response8.text()

                const response9 = await fetch(silverstoneText)
                const silverstone_text = await response9.text()

                const response10 = await fetch(singaporeText)
                const singapore_text = await response10.text()

                //Set the inital car image & descriptions on app launch
                //Set's ALL car images and descriptions
                setCarData({carImg: porsche_img, carText: porsche_text, carName: 'Porsche'})
                setAllCarData([{carImg:porsche_img, carText:porsche_text, carName: 'Porsche'},
                                    {carImg:lambo_img, carText:lambo_text, carName: 'Lamborghini Huracan'},
                                    {carImg:bmw_img, carText:bmw_text, carName: 'BMW M4'},
                                    {carImg:mercedes_img, carText:mercedes_text, carName: 'Mercedes GT'},
                                    {carImg:car5, carText:ferrari_text, carName: 'Ferarri 458'}])
                //Set the inital track image and description
                //set ALL track images and descriptions      
                setTrackData({ trackImg: leguna_img, trackText: leguna_text, trackName: 'Leguna Seca'})
                setAllTrackData([{trackImg: leguna_img, trackText: leguna_text, trackName: 'Leguna Seca'},
                                    {trackImg: zandvoort_img, trackText: zandvoort_text, trackName: 'Zandvoort'},
                                    {trackImg: coa_img, trackText: coa_text, trackName: 'Circut of Americas'},
                                    {trackImg: silverstone_img, trackText: silverstone_text, trackName: 'Silverstone'},
                                    {trackImg: singapore_img, trackText: singapore_text, trackName: 'Singapore'}])                 
            }catch(e){
                console.log(e)
            }


            //*************** */
            //IMAGE CAROUSEL
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
              }, 5000); // Change the interval as needed (milliseconds)
          
              return () => clearInterval(interval);
              //******END IMAGE CAROUSEL******************** */
        }
        fetchData()
    }, []); 

    //Holds all CAR related data
    const [allCarData,setAllCarData] = useState([])
    const [carData, setCarData] = useState({
        carImg: porsche_img,
        carText: 'text'
    })
    //Holds all TRACK related data
    const [allTrackData,setAllTrackData] = useState([])
    const [trackData, setTrackData] = useState({
        trackImg: leguna_img,
        trackText: 'EMPTY TRACK TEXT'
    })

    //displays the car and desritpion on user clicking one of the 5 options
    const carSelect = (i) =>{
        setCarData(allCarData[i.target.value])
    }
    //displays the track and desritpion on user clicking one of the 5 options
    const trackSelect = (i) =>{
        setTrackData(allTrackData[i.target.value])
    }

    //CONSUME CONTEXT 
    const {setRentalConfirmation} = useContext(confirmationContext)
    
    //confirms date/time/track/car and sends it to the confirmation page
    //setRentalConfirmation is a context Provider
    const confirmation = (event) =>{
        event.preventDefault()
        setRentalConfirmation({ carName: carData.carName,trackname: trackData.trackName, date: dateRef.current.valueAsDate })
    }


    //TODO!!!: Put these in seperate files to access
    const reviewsData = [
        { id: 1, text: 'Great product! I love it.', author: 'John Doe' },
        { id: 2, text: 'Amazing service. Highly recommended.', author: 'Jane Smith' },
        { id: 3, text: 'Amazing service. Highly recommended.', author: 'Memes Smith' },
        { id: 4, text: 'Amazing service. Highly recommended.', author: 'LKV' },
        { id: 5, text: 'Amazing service. Highly recommended.', author: 'ff' },
        { id: 6, text: 'Amazing service. Highly recommended.', author: ' Smith' },
        { id: 7, text: 'Amazing service. Highly recommended.', author: 'ff' },
        // Add more reviews as needed
      ];
      
    //This is for the scrolling animation for the reviews
    const [currentIndex, setCurrentIndex] = useState(0);

    //Changes the color of button
    const [activeButton, setActiveButton] = useState(null);
    
    //Changes the class name of the HTML element. If Active bgcolor = red ELSE bg color = default
    const changeColor = (button) => {
        setActiveButton((prevActiveButton) => (prevActiveButton === button ? null : button));
      };
    

    //use ref to target the date picker
    const dateRef = useRef(null)

    return (
        <div>
            <div id='hero_card'>
                <img id='finish_line' src={finishLine}></img>
            </div>
            <br></br>

            <div id='about_us'>
                <h1>ARK Racing</h1>
            </div>

            <div id='about_us_desc'>
                <p id='text'>Welcome to ARK Racing, where luxury meets adrenaline. We are a 
                    premier supercar rental service dedicated to providing an unparalleled 
                    driving experience for enthusiasts around the globe. At ARK Racing, 
                    we redefine the concept of luxury by offering not just supercar rentals, 
                    but an all-inclusive service that caters to your every need.
                    <br></br>
                    <br></br>
                    Our mission is to make your dreams of driving the world's most exclusive supercars a reality, 
                    without any hassle. Imagine having the keys to a fleet of high-performance vehicles at your fingertips, 
                    ready to be delivered to any track of your choice worldwide. With ARK Racing, this dream becomes a seamless and exhilarating reality.
                    <br></br>
                    <br></br>
                    What sets us apart is our commitment to delivering more than just a car; we deliver an experience.
                    From the moment you contact us to the adrenaline-pumping laps on the track, our team ensures every detail 
                    is taken care of. Our all-inclusive service covers not only the rental of the finest supercars but also 
                    includes delivery to your chosen track, ensuring that all you need to do is show up and be ready to drive.
                    <br></br>
                    <br></br>
                    Whether you're a seasoned racing enthusiast or someone looking to elevate a special occasion, ARK Racing 
                    is your gateway to an extraordinary automotive adventure. Our diverse fleet boasts the latest and 
                    most sought-after supercar models, meticulously maintained to provide you with the performance and luxury you deserve.
                    <br></br>
                    <br></br>
                    At ARK Racing, we believe in turning your driving fantasies into reality. Embark on a journey with us, 
                    where every curve of the track becomes a thrilling chapter in your story. Unleash the power, embrace the speed
                    and experience the epitome of automotive excellence with ARK Racing – your passport to the world of supercar exhilaration.
                    </p>
            </div>

            <div id='why_us'>
                <div id='perk_1'>
                    <img id='racecar_svg' src={racecar}></img>
                    <p>Etiam euismod libero eu neque auctor, id rhoncus sapien 
                        vestibulum. Sed nec sodales justo. Maecenas volutpat, s
                        em ut interdum vestibulum, mauris dolor aliquam justo, id 
                        fermentum ex metus eu sapien. Vestibulum vel sapien non sapien fermentum fermentum.</p>
                </div>

                <div id='perk_2'>
                    <img id='speedo' src={speedo}></img>
                    <p>Nunc ut elit a nisl tincidunt iaculis. In hac habitasse 
                        platea dictumst. Morbi eu tortor at velit tincidunt semper.
                         Sed convallis, ligula ut fermentum bibendum, eros risus 
                         malesuada odio, in convallis felis orci a dolor.</p>
                </div>
                
                <div id='perk_3'>
                    <img id='speedCar' src={speedCar}></img>
                    <p>Phasellus ac neque vel metus accumsan luctus ac vitae justo.
                         Sed auctor fringilla nunc, nec tincidunt metus consectetur
                          vel. Nullam sed mi eget elit ultrices varius. Fusce interdum 
                          libero ut efficitur fermentum. Integer a mauris et elit congue laoreet.</p>
                </div>
            </div>


            
        <div id='faq_main_container'>
            <div id='faq_container'>
                <div id='faq1'>
                    <h1>Do I need to bring helmet?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce at justo ac orci aliquet sagittis. Proin non mi vitae 
                        nulla tincidunt fringilla. Vestibulum ante ipsum primis in
                         faucibus orci luctus et ultrices posuere cubilia Curae. Sed 
                         consectetur, nunc sit amet vehicula lacinia, dolor turpis
                          convallis quam, vel ullamcorper elit arcu at augue.</p>
                </div>
                <div id='faq2'>
                    <h1>Is there a charge for Fuel?</h1>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada 
                        fames ac turpis egestas. Duis eget elit vel nulla efficitur vehicula 
                        in non metus. Nullam nec lectus eu risus cursus congue. Vivamus eget metus
                         ac lacus varius convallis vel at felis. Integer vel elit vitae nunc vestibulum dapibus.
                         In hac habitasse platea dictumst. Quisque ma</p>
                </div>
                <div id='faq3'>
                    <h1>What is included in the rental?</h1>
                    <p>In hac habitasse platea dictumst. Quisque malesuada aliquet felis,
                         in eleifend sapien consectetur vel. Ut euismod tellus at metus
                          vulputate, ac ultricies justo auctor. Nam commodo nisl at massa 
                          hendrerit, vel feugiat orci rhoncus. Sed condimentum justo vel 
                          erat vehicula, vitae dictum neque fermentum.</p>
                </div>
                <div id='faq4'>
                    <h1>How many laps do I get?</h1>
                    <p>Aliquam erat volutpat. Maecenas non hendrerit leo. Sed facilisis 
                        orci vel commodo tincidunt. Suspendisse potenti. Curabitur nec 
                        libero in elit eleifend consequat. Vivamus accumsan, est ut 
                        malesuada posuere, libero felis fermentum justo, eget ullamcorper augue ex at metus.</p>
                </div>
                <div id='faq5'>
                    <h1>What should I bring?</h1>
                    <p>Quisque feugiat ultrices risus, vitae fermentum nisl rhoncus vel. 
                        Suspendisse potenti. Duis nec vestibulum ex. Nunc eu felis 
                        vitae neque condimentum dignissim. Morbi in elit nec erat
                         consectetur ultricies sit amet et leo. Sed sodales consectetur vestibulum.</p>
                </div>
                <div id='faq6'>
                    <h1>Last question Here</h1>
                    <p>nteger eu nisl ac velit dignissim fringilla. Sed non leo 
                        at ex ultricies fermentum. Vivamus aliquam purus eget velit 
                        pharetra, ac consequat lacus dapibus. Nulla facilisi. Aenean 
                        vestibulum ultricies velit, at accumsan tortor consectetur a.
                         Maecenas fringilla ipsum non ante ullamcorper, sit amet convallis sem malesuada.</p>
                </div>
            </div>
        </div>

        <div>
            <button onClick={bookRace}><Link to="/bookrace">Book a time!</Link></button>
        </div>

            <div className="app">
                <div className="carousel">
                    {reviewsData.map((review, index) => (
                        <div
                        key={review.id}
                        className={`review ${index === currentIndex ? 'active' : ''}`}
                        >
                    <p>{review.text}</p>
                    <p className="author">- {review.author}</p>
                </div>
                    ))}
                </div>
            </div>

            <div id='logo'>
                <h1>TRACK CAR RENTAL SERVICES</h1>
          
            </div>

            <div class='rental_form_container'>

                <div class='grid-item item1' id='car_options'>
                    <button id='option_buttons' value='0' class='car_option' onClick={carSelect}>Porsche GT3</button>
                    <button id='option_buttons' value='1' class='car_option' onClick={carSelect}>Lamborghini Huracan</button>
                    <button id='option_buttons' value='2' class='car_option' onClick={carSelect}>BMW M4</button>
                    <button id='option_buttons' value='3' class='car_option' onClick={carSelect}>Mercedes GT</button>
                    <button id='option_buttons' value='4' class='car_option' onClick={carSelect}>Ferrari 458</button>
                </div>



      
                <div class='grid-item item2' id='track_options'>
                    <button id='option_buttons' value="0" onClick={trackSelect}>Leguna Seca</button>
                    <button id='option_buttons' value="1" onClick={trackSelect}>Zadervort</button>
                    <button id='option_buttons' value="2" onClick={trackSelect}>Circut of America</button>
                    <button id='option_buttons' value="3" onClick={trackSelect}>Silverstone</button>
                    <button id='option_buttons' value="4" onClick={trackSelect}>Singapore</button>
                </div>
  


                <div class='grid-item item3'>
                    <form>
                        <label>When?</label>
                        <input type='date' placeholder='Pickup Date' required={true} id='date' ref={dateRef}></input>
                        <button onClick={confirmation}><Link to="/confirmation">Let's Race!</Link></button>
                       
                    </form>
                </div>

             

                <div class='grid-item item4'>
                    <img src={carData.carImg} alt='FAILED TO LOAD'></img>
                </div>

                <div class='grid-item item5'>
                    <img src={trackData.trackImg} alt='FAILED TO LOAD'></img>
                </div>

                <div class='grid-item item6'>
                    <p>{carData.carText}</p>
                </div>

                <div class='grid-item item7'>
                    <p>{trackData.trackText}</p>
                </div>
                
            </div>
            

           

       
            <div id='TESING ZONE'>

                <Footer />





                <h1>***************TESTING ZONE*********</h1>
                <div className="app_test">

                    <button
                        className={`button ${activeButton === 1 ? 'active' : ''}`}
                        onClick={() => changeColor(1)}
                    >
                        Button 1
                    </button>
                    <button
                        className={`button ${activeButton === 2 ? 'active' : ''}`}
                        onClick={() => changeColor(2)}
                    >
                        Button 2
                    </button>
                    <button
                        className={`button ${activeButton === 3 ? 'active' : ''}`}
                        onClick={() => changeColor(3)}
                    >
                        Button 3
                    </button>
                    </div>

               
               
            </div>




        </div>
    );
}

export default Home;