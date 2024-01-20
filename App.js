import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import './App.css';

import Navbar from './navbar';
import Home from './home';
import Contact from './contact'
import About from './about'
import Careers from './careers'
import Confirmation from './confirmation';
import BookRace from './book_race'

import confirmationContextProvider from './confirmationContextProvider';


const App = () => {
 

  return (
 
        <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/bookrace" element={<BookRace />} />
          </Routes>
        </div>


  );
};

export default App;

/*  <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
          </Routes> */