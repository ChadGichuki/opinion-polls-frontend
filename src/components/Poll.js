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
        <div id="polls">
            <h2>{question}</h2>
            <div className="pollsflex">
                <div className="card mb-3" style={{"max-width": "65rem"}}>
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
                <h3>Vs</h3>
                <div className="card mb-3" style={{"width": "65rem"}}>
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


{/* <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */}