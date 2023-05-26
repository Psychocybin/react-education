import React from "react";
import SinglePurpose from "./SinglePurpose";

function Counter(props) {
    let [count, setCount] = React.useState(0);

    return(
        <>
        <h2>Counter</h2>

        <ul>
            <SinglePurpose>{count}</SinglePurpose>
        </ul>

        <button onClick={() => setCount(count + 1)}>Add number</button>
        </>
    );
}

export default Counter;