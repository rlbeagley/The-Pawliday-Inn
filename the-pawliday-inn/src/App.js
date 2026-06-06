import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Booking from './pages/Booking.js';
import Services from './pages/Services.js';
import CustomNavbar from './components/Navbar.js'


function App() {
  return (
    <BrowserRouter>
      <CustomNavbar></CustomNavbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
