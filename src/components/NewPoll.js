import React, { useState } from "react";

function NewPoll({onNewPoll}){

    const [question, setQuestion] = useState("")
    const [image1, setImage1] = useState("")
    const [label1, setLabel1] = useState("")
    const [image2, setImage2] = useState("")
    const [label2, setLabel2] = useState("")

    function handleQuestionChange(e){
        setQuestion(e.target.value)
    }

    function handleLabel1Change(e){
        setLabel1(e.target.value)
    }

    function handleImage1Change(e){
        setImage1(e.target.value)
    }

    function handleLabel2Change(e){
        setLabel2(e.target.value)
    }

    function handleImage2Change(e){
        setImage2(e.target.value)
    }

    function handleFormSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/questions", {
            method: "POST",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify({
                question: question,
                option1: {image: image1, label: label1, votes: 0},
                 option2: {image: image2, label: label2, votes: 0}
            })
        })
        .then(res => res.json())
        .then(data => {
            onNewPoll(data)
        })

        
    }

    return(
        <form id="form" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="question" className="form-label">Question:</label><br/>
                <input type="text" id="question" className="form-control" name="question" placeholder="New Poll" value={question} onChange={handleQuestionChange}/><br/>
            </div>
            <div className="mb-3">
                <label htmlFor="option1Label" className="form-label">1st Option:</label><br/>
                <input type="text" id="label" className="form-control" name="option1Label" placeholder="Option 1label" value={label1} onChange={handleLabel1Change}/><br/>
                <input type="text" id="image" className="form-control" name="option1image" placeholder="Image URL" value={image1} onChange={handleImage1Change}/><br/>
            </div>
            <div className="mb-3">
                <label htmlFor="option2Label" className="form-label">2nd Option:</label><br/>
                <input type="text" id="label" className="form-control" name="option2Label" placeholder="Option 2label" value={label2} onChange={handleLabel2Change}/><br/>
                <input type="text" id="image" className="form-control" name="option2image" placeholder="Image URL" value={image2} onChange={handleImage2Change}/><br/>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
    )
}


export default NewPoll