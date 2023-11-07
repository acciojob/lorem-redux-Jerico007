
import React from "react";
import LoremCard from "./LoremCard";
import './../styles/App.css';

const App = () => {
  return (
    <div className="App">
        <h1>A short Naration of Lorem Ipsum</h1>
        <p>Below contains the title and body gotten from a random API</p>
        <LoremCard/>
    </div>
  )
}

export default App
