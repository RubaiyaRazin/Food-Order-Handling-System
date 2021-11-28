import './App.css';
import Header from "./components/Header";       // importing Header.js to App.js
import About from "./components/About";
import Offer from "./components/Offer";

function App() {
  return (
    <div>
        <Header />
        <Offer/>
        <About />
    </div>
  );
}

export default App;