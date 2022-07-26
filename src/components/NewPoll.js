import React, { useState } from "react";

function NewPoll({onNewPoll}){

    const [formData, setFormData] = useState({
        question: "",
        option1: {image: "", label: "", votes: 0},
        option2: {image: "", label: "", votes: 0}
    })

    function handleFormSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/questions", {
            method: "POST",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => onNewPoll(data))

    }

    return(
        <form onSubmit={handleFormSubmit}>
            <label for="question">Question:</label><br/>
            <input type="text" id="question" name="question" value={formData.question} onChange={handleFormChange}/><br/>

            <label for="option1Label">1st Option:</label><br/>
            <input type="text" id="label" name="option1Label" placeholder="label" value={formData.option1.label}/><br/>
            <input type="text" id="image" name="option1image" placeholder="Image URL" value={formData.option1.image}/><br/>

            <label for="option2Label">2nd Option:</label><br/>
            <input type="text" id="label" name="option2Label" placeholder="label" value={formData.option2.label}/><br/>
            <input type="text" id="image" name="option2image" placeholder="Image URL" value={formData.option2.image}/><br/>

            <input type="submit" value="Submit"/>
        </form>
    )
}

export default NewPoll