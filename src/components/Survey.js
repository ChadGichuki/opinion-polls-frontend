import React from "react";
import Poll from "./Poll"

function Survey({handleSetPolls, polls}){

    // On loading of the Survey component, get the polls to display on Survey page
    useEffect(() => {
        fetch("http://localhost:3000")
        .then(res => res.json())
        .then(data => handleSetPolls(data.questions))
    }, [])

    return(
        <div className="survey">
            <h1>Vote once for your preferred option on each question</h1>
            {polls.map(poll => {
                <Poll key={poll.id} id={poll.id} question={poll.question} option1={poll.option1} option2={poll.option2}/>
            })}
        </div>
    )
}

export default Survey