import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Poll from "./Poll"

function Survey({handleSetPolls, polls}){

    // On loading of the Survey component, get the polls to display on Survey page
    useEffect(() => {
        fetch("http://localhost:3000/questions")
        .then(res => res.json())
        .then(data => handleSetPolls(data))
    }, [])

    return(
        <div className="survey">
            <h1>Vote once for each preferred option</h1>
            {polls.map(poll => {
               return <Poll key={poll.id} id={poll.id} question={poll.question} option1={poll.option1} option2={poll.option2}/>
            })}
            <h3>Thank you for taking the survey. Head over to <Link to="/results">Current Polls</Link> to see the latest polls.</h3>
        </div>
    )
}

export default Survey