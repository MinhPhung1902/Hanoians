import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './index.css'
import HomePage from './pages/HomePage';
import Menu from './component/Menu';
import Location from './pages/Location'
import Reservation from './pages/Reservation'
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import MenuPage from './pages/MenuPage';
import Success from './pages/Success'

const App = () => {
  return (
  <div className='bg-amber-50'>
 <Routes>
        <Route path="/" element ={<HomePage />} />
        <Route path="About" element={<About />} />
        <Route path="Menu" element={<MenuPage />} />
        <Route path="location" element={<Location />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Reservation" element={<Reservation />} />
        <Route path="success" element={<Success />} />
    </Routes>
 </div>
  )
}

export default App;
