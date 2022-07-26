import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>Welcome To The Popular Opinion Polls!</h1>
            <h3>Where every vote counts, and we count every vote.</h3>
            <p>Ready to take the survey?</p>
            <Link to="/survey">Yes   </Link><Link to="/results">   No</Link>
        </div>

    )
}

export default Home
