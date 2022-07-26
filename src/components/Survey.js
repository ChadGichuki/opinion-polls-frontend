import React from "react";
import Poll from "./Poll"

function Survey(){
    return(
        <div className="survey">
            <h1>Vote once for your preferred option on each question</h1>
            {polls.map(poll => {
                <Poll/>
            })}
        </div>
    )
}

export default Survey