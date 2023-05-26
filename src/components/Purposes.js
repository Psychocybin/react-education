import React from "react";
import SinglePurpose from "./SinglePurpose";

function Purposes() {
    let [purposes, setPurposes] = React.useState(['work', 'education', 'travel', 'games']);

    // let purposes = purposesState[0];
    // let setPurposes = purposesState[1];

    return(
        <>
        <h2>PURPOSES</h2>
        <ul>
            {purposes.map(x => <SinglePurpose>{x}</SinglePurpose>)}
        </ul>

        <button onClick={() => console.log('clicked')}>Modify</button>
        </>
    );
}

export default Purposes;