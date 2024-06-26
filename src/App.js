import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import './App.css'
import logo from './images/Mountains.png'
import Trending from "./components/Trending";
import Help from "./components/Help";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const name = 'FinTouch';

function App() {
  return (
  // <Trending/>
  <div className= "App">
    <div className='Logo'>
      <img className='Skis' src={logo} alt="logo" width/>
      <text>
          {name}
      </text>
    </div>
    <Navbar/>
    <h1 className='Header'>
      <text>
          Explore
      </text>
      <text className="Name"> 
        {name}
      </text>
    </h1>
    <Filter/>
</div>
);
}

export default App;