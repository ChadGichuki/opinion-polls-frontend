import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <h1>Welcome To The Popular Opinion Polls!</h1>
            <h3>Where every vote counts, and we count every vote.</h3>
            <p>Ready to take the survey?</p>
            <Link to="/survey" className="homebtn">Yes</Link><Link to="/results" className="homebtn">No</Link>
        </div>

    )
}

export default Home
