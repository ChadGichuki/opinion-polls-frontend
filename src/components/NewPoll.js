import React, { useState } from "react";

function NewPoll(){

    const [formData, setFormData] = useState({
        question: "",
        option1: {image: "", label: "", votes: 0},
        option2: {image: "", label: "", votes: 0}
    })

    return(
        <form>
            <label for="question">Question:</label><br/>
            <input type="text" id="question" name="question"/><br/>
            <label for="option1Label">1st Option:</label><br/>
            <input type="text" id="label" name="option1Label" placeholder="label"/><br/>
            <input type="text" id="image" name="option1image" placeholder="Image URL"/><br/>
            <label for="option2Label">2nd Option:</label><br/>
            <input type="text" id="label" name="option2Label" placeholder="label"/><br/>
            <input type="text" id="image" name="option2image" placeholder="Image URL"/><br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default NewPoll