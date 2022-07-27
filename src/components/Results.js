import React from "react";

function Results({polls}){
    return(
        <table className="table table-striped-columns">
            <thead>
                <tr>
                <th>ITEM</th>
                <th>QUESTION</th>
                <th>OPTION 1</th>
                <th>VOTES</th>
                <th>OPTION 2</th>
                <th>VOTES</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                {polls.map(poll => {
                    return(
                        <tr key={poll.id}>
                            <td>{poll.id}</td>
                            <td>{poll.question}</td>
                            <td>{poll.option1.label}</td>
                            <td>{poll.option1.votes} Votes</td>
                            <td>{poll.option2.label}</td>
                            <td>{poll.option2.votes} Votes</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Results