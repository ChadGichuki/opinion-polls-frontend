import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home"

function App() {

  // State for polls will live in the App due to sharing of data with results and newpoll form
  // polls & Setpolls passed down as prop to survey
  const [polls, setPolls] = useState([])


  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey" element={<Survey handleSetPolls={setPolls} polls={polls}/>}/>
        {/* <Route path="/results" element={<Results/>}/>
        <Route path="/contribute" element={<NewPoll/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
