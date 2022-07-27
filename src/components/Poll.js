import React from "react";

function Poll({id, question, option1, option2}){

    // Increment votes for option 1
    function handleOption1Click(e){
        // Increment current votes by 1
        const updatedVotes = option1.votes += 1
        // PATCH the update
        fetch(`http://localhost:3000/questions/${id}`, {
            method: "PATCH",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({
                "option1": {"votes": updatedVotes}
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
        fetch(`http://localhost:3000/questions/${id}`, {
            method: "PATCH",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({
                "option2": {"votes": updatedVotes}
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return(
        <div className="card" style={{"width": "65rem"}}>
            <h2>{question}</h2>
            <div >
                <div className="options">
                    <img src={option1.image} alt={option1.label} className="card-img-top"/>
                    <p className="card-title">{option1.label}</p>
                    <button className="btn btn-primary" onClick={handleOption1Click}>Vote</button>
                </div>
                <div className="options">
                    <img src={option2.image} alt={option2.label} className="card-img-top"/>
                    <p className="card-title">{option2.label}</p>
                    <button className="btn btn-primary" onClick={handleOption2Click}>Vote</button>
                </div>
            </div>
        </div>
    )
}

export default Poll


{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}