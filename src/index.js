import React from "react";
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage';
import Location from './pages/Location'
import Reservation from './pages/Reservation'
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import MenuPage from './pages/MenuPage';


ReactDom.render(
    <BrowserRouter>
     <App />
    </BrowserRouter>,
 document.getElementById('root'))
