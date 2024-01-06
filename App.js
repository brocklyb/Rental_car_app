import './App.css';
import Navbar from './navbar';
import Home from './home';
import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

const App = () => {
 

  return (
    <Router>
   
        <div>
          <Home />
         
          <Routes>
            
          </Routes>

        </div>


 
    </Router>
  );
};

export default App;