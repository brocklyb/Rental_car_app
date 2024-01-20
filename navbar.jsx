import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Switch} from 'react-router-dom';
import './navbar.css';

import Home from './home.jsx';
import Contact from './contact'
import About from './about'
import Careers from './careers'
import Confirmation from './confirmation';

import logo from './images/logo.png'


const Navbar = () => {
    return (
        <ul id='container'>
            
                    <li>
                        <img id='logo' src={logo}></img>
                    </li>

                    <li>
                        <Link to="/home">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About Us</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li>
                        <Link to="/bookrace">Book Race</Link>
                    </li>

                </ul>
             

    );
  };

export default Navbar;

