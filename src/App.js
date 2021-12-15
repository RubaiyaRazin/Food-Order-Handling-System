// import React from 'react';

// import './App.css';
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";       // importing Header.js to App.js
// import About from "./components/About";
// import Offer from "./components/Offer";
// import Footer from "./components/Footer";
// import Contact from "./components/Contact";
// import Reservation from "./components/Reservation";
// import Login from "./components/Login";
// import Registration from "./components/Registration";
// import Menu from "./components/Menu";

// // this porting i'm adding new here
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


// function App() {
//     return (

//         <Router>
//             <div className='App'>
//                 <Navbar />
//                 <Header />
//                 <Offer />
//                 <Footer />

//                 <Routes>
//                     <Route path="/About" component={About}/>
//                     <Route path="/Menu" component={Menu}/>
//                     <Route path="/Reservation" component={Reservation}/>
//                     <Route path="/Contact" component={Contact}/>
//                     <Route path="/Login" component={Login}/>
//                     <Route path="/Registration" component={Registration}/>
//                 </Routes>                
//             </div>
//         </Router>




//         // <div>
//         //     <Navbar />
//         //     <Header />
//         //     <About />
//         //     <Offer />    
//         //     <br></br><br></br><br></br>        
//         //     <Menu name="Food Menu" desc="Super delectious food. Tasty & delecious food made with fresh ingrediants. Food is an important part of your health! Have a look into our food menu & chose your desired food inteligently." />
//         //     <Login />
//         //     <Registration />
//         //     <br></br><br></br><br></br>
//         //     <Reservation />
//         //     <br></br><br></br><br></br>
//         //     <Contact />
//         //     <Footer />
//         // </div>




//     );
// }

// export default App;


import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Reservation from "./components/Reservation";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Menu from "./components/Menu";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/" element={<Header />} /> */}
                <Route path="/About" element={<About />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Reservation" element={<Reservation />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registration" element={<Registration />} />
                {/* <Route path="/Offer" element={<Offer />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;