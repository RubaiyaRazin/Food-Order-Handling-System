import './App.css';
import Header from "./components/Header";       // importing Header.js to App.js
import About from "./components/About";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
        <Header />
        <Offer />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;