import React from "react";

function Poll({id, question, option1, option2}){

    // Increment votes for option 1
    function handleOption1Click(e){
        // Increment current votes by 1
        const updatedVotes = option1.votes += 1
        // PATCH the update
        fetch(`https://dry-forest-65259.herokuapp.com/questions/${id}`, {
            method: "PATCH",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({
                "option1": {"image": option1.image, "label": option1.label, "votes": updatedVotes}
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    // Increment votes for option 2
    function handleOption2Click(e){
        // Increment current votes by 1
        const updatedVotes = option2.votes += 1
        // PATCH the update
        fetch(`https://dry-forest-65259.herokuapp.com/questions/${id}`, {
            method: "PATCH",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({
                "option2": {"image": option2.image, "label": option2.label, "votes": updatedVotes}
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return(
        <div id="poll">
            <h2>{question}</h2>
            <div className="pollsflex">
                <div className="card" style={{"width": "65rem"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={option1.image} alt={option1.label} className="img-fluid rounded-start" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-title">{option1.label}</p>
                                <button className="btn btn-primary" onClick={handleOption1Click}>Vote</button>
                            </div>

                        </div>
                    </div>
                </div>
                <h3 id="vs">Vs</h3>
                <div className="card" style={{"width": "65rem"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={option2.image} alt={option2.label} className="img-fluid rounded-start" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-title">{option2.label}</p>
                                <button className="btn btn-primary" onClick={handleOption2Click}>Vote</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Poll
