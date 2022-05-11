import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';
import Cycling from './Pages/Cycling/Cycling';
import Running from './Pages/Running/Running';
import Walking from './Pages/Walking/Walking';
import HeartBeat from './Pages/HeartBeat/HeartBeat';
import Sleep from './Pages/Sleep/Sleep';
import Stress from './Pages/Stress/Stress';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/heartrate' element={<HeartBeat />} />
        <Route path='/running' element={<Running />} />
        <Route path='/cycling' element={<Cycling />} />
        <Route path='/walking' element={<Walking />} />
        <Route path='/sleep' element={<Sleep />} />
        <Route path='/stress' element={<Stress />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
