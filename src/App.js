import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch
// } from 'react-router-dom';
//this upper portion recenly added for responsive navbar

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

function App() {
  return (
//     <Router>
//     <Navbar/>
//     <main>
//       <Switch>
//         <Route path="/" exact>
//           <Home/>
//         </Route>
//         <Route path="/about" exact>
//           <About/>
//         </Route>
        
//         <Route path="/contact" exact>
//           <Contact/>
//         </Route>
//         <Redirect to="/" />
//       </Switch>
//     </main>
//    </Router>


    <div>
        <Navbar />
        <Header />
        <Offer />
        <Reservation />
        <Login/>
        <Registration />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;