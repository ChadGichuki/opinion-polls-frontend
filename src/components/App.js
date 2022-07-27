import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home"
import Survey from "./Survey";
import Results from "./Results";
import NewPoll from "./NewPoll";

function App() {

  // State for polls will live in the App due to sharing of data with results and newpoll form
  // polls & Setpolls passed down as prop to survey
  const [polls, setPolls] = useState([
    {
      "id": 1,
      "question": "Which of these 2 cities would you prefer to live in?",
      "option1": {"image": "", "label": "Nairobi", "votes": 0 },
      "option2": {"image": "", "label": "Kigali", "votes": 0 }
    }
  ])

  function handleNewPoll(data){
    setPolls([...polls, data])
  }


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey" element={<Survey handleSetPolls={(questions) => setPolls(questions)} polls={polls}/>}/>
        <Route path="/results" element={<Results polls={polls}/>}/>
        <Route path="/contribute" element={<NewPoll onNewPoll={handleNewPoll}/>}/>
      </Routes>
    </div>
  );
}

export default App;
