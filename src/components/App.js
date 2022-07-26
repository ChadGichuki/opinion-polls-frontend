import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home"

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/survey" element={<Survey/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/contribute" element={<NewPoll/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
