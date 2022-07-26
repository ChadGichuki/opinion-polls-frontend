import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home"
import Survey from "./Survey";

function App() {

  // State for polls will live in the App due to sharing of data with results and newpoll form
  // polls & Setpolls passed down as prop to survey
  const [polls, setPolls] = useState([])


  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey" element={<Survey handleSetPolls={(questions) => setPolls(questions)} polls={polls}/>}/>
        {/* <Route path="/results" element={<Results/>}/>
        <Route path="/contribute" element={<NewPoll/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
