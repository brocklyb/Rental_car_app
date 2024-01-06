import React, {useState, useEffect ,createContext} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.css';
import car1 from './images/blue_porsche.jpeg'
import car2 from './images/lambo.jpeg'
import car3 from './images/bmw.jpg'
import car4 from './images/merc.jpg'
import car5 from './images/ferarri.jpg'

import track1 from './tracks/leguna.jpg'
import track2 from './tracks/zand.jpg'
import track3 from './tracks/coa.jpg'
import track4 from './tracks/silverstone.jpg'
import track5 from './tracks/singapore.jpg'

import porscheText from './descriptions/porsche'
import lamboText from './descriptions/lambo'
import bmwText from './descriptions/bmw'
import mercText from './descriptions/merc'
import ferrariText from './descriptions/ferarri' 

import test from './descriptions/porsche.txt'


function Home() {
    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response1 = await fetch(porscheText)
                const data1 = await response1.text()
                //console.log(typeof(data1))
                handleText(data1)
             

                const response2 = await fetch(lamboText)
                const data2 = await response2.text()
                //console.log(data2)

                const response3 = await fetch(bmwText)
                const data3 = await response3.text()
                //console.log(data3)

                const response4 = await fetch(mercText)
                const data4 = await response4.text()
                //console.log(data4)

                const response5 = await fetch(ferrariText)
                const data5 = await response5.text()
                //console.log(data5)

                setCarImage({carImg: car1, carText: data1})
                setAllCarImages([{carImg:car1, carText:data1},{carImg:car2, carText:data2},{carImg:car3, carText:data3},{carImg:car4, carText:data4},{carImg:car5, carText:data5}])
            }catch(e){
                console.log(e)
            }
        }
        fetchData()
        setAllTrackImages([track1,track2,track3,track4,track5])
        setTrackImage(track1)
        

    }, []); 

   // const [allCarImages,setAllCarImages] = useState([])
   // const [carImage, setCarImage] = useState([])

    const [allCarImages,setAllCarImages] = useState([])
    const [carImage, setCarImage] = useState({
        carImg: car1,
        carText: 'text'
    })

    const [allTrackImages,setAllTrackImages] = useState([])
    const [trackImage, setTrackImage] = useState([])

    const carSelect = (i) =>{
        setCarImage(allCarImages[i.target.value])
    }

    const trackSelect = (i) =>{
        setTrackImage(allTrackImages[i.target.value])
    }


    const allText = []

    const handleText = (i) =>{
        //console.log(i)
        allText.push(i)
    }

    const text = () =>{
        console.log(allText)
    }

    return (
        <div>
            <div id='logo'>
                <h1>TRACK CAR RENTAL SERVICES</h1>
            </div>

            <div class='rental_form_container'>

                <div class='grid-item item1'>
                    <button id='option_buttons' value='0' class='car_option' onClick={carSelect}>Porsche GT3</button>
                    <button id='option_buttons' value='1' class='car_option' onClick={carSelect}>Lamborghini Huracan</button>
                    <button id='option_buttons' value='2' class='car_option' onClick={carSelect}>BMW M4</button>
                    <button id='option_buttons' value='3' class='car_option' onClick={carSelect}>Mercedes GT</button>
                    <button id='option_buttons' value='4' class='car_option' onClick={carSelect}>Ferrari 458</button>
                </div>

                <div class='grid-item item2'>
                    <button id='option_buttons' value="0" onClick={trackSelect}>Leguna Seca</button>
                    <button id='option_buttons' value="1" onClick={trackSelect}>Zadervort</button>
                    <button id='option_buttons' value="2" onClick={trackSelect}>Circut of America</button>
                    <button id='option_buttons' value="3" onClick={trackSelect}>Silverstone</button>
                    <button id='option_buttons' value="4" onClick={trackSelect}>Singapore</button>
                </div>

                <div class='grid-item item3'>
                    <label>When?</label>
                    <input type='date' placeholder='Pickup Date'></input>
                </div>

                <div class='grid-item item4'>
                    <img src={carImage.carImg} alt='FAILED TO LOAD'></img>
                </div>

                <div class='grid-item item5'>
                    <img src={trackImage} alt='FAILED TO LOAD'></img>
                </div>

                <div class='grid-item item6'>
                    <p>{carImage.carText}</p>
                </div>

                <div class='grid-item item7'>
                    <p>TRACK INFO HERE</p>
                </div>
                
            </div>

            <div id='why_us'>
                <p>Insert Image here</p>
                <p>Add description about renting a car form us</p>
            </div>

            <div id='available_cars'>
                <h2>Available cars</h2>
                <h2>Create buttons to view images of cars in stock</h2>
            </div>

            <div id='destinations'>
                <h2>RACE TRACKS + Image</h2>
                <h2>RACE TRACKS + Image</h2>
                <h2>RACE TRACKS + Image</h2>
            </div>





            <div id='TESING ZONE'>
                <img src={carImage.carImg} alt='FAILED TO LOAD'></img>
                <h1>{carImage.carText}</h1>
               
            </div>




        </div>
    );
}

export default Home;