import React from "react";
import SinglePurpose from "./SinglePurpose";

function Purposes() {
    let [content, setContent] = React.useState([
        {id: 1, text: 'work'},
        {id: 2, text: 'education'},
        {id: 3, text: 'travel'},
        {id: 4, text: 'games'},
    ]);
    
    // let content = contentState[0];
    // let setContent = contentState[1];

    return(
        <>
        <h2>PURPOSES</h2>
        <ul>
            {content.map(x => <SinglePurpose>{x}</SinglePurpose>)}
        </ul>

        <button onClick={() => console.log('clicked')}>Clicked</button>
        </>
    );
}

export default Purposes;