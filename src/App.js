import React from 'react';

import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";       // importing Header.js to App.js
import About from "./components/About";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Reservation from "./components/Reservation";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Menu from "./components/Menu";

function App() {
    return (

        <div>
            <Navbar />
            <Header />
            <About />
            <Offer />    
            <br></br><br></br><br></br>        
            <Menu name="Food Menu" desc="Super delectious food. Tasty & delecious food made with fresh ingrediants. Food is an important part of your health! Have a look into our food menu & chose your desired food inteligently." />
            <Login />
            <Registration />
            <br></br><br></br><br></br>
            <Reservation />
            <br></br><br></br><br></br>
            <Contact />
            <Footer />
        </div>
    );
}

export default App;