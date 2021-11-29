import './App.css';
import Header from "./components/Header";       // importing Header.js to App.js
import About from "./components/About";
import Offer from "./components/Offer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Header />
        <Offer/>
        <About />
        <Footer/>
    </div>
  );
}

export default App;