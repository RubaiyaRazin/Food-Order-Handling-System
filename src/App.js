import './App.css';
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
    <div>
        <Header />
        <Offer />
        <Reservation/>
        <Login/>
        <Registration/>
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;