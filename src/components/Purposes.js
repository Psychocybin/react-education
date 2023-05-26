import React from "react";
import SinglePurpose from "./SinglePurpose";

function Purposes() {
    let [content, setContent] = React.useState(['work', 'education', 'travel', 'games']);
    
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