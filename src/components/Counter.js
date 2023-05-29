import React from "react";
import SinglePurpose from "./SinglePurpose";

function Counter(props) {
    let [count, setCount] = React.useState(0);
    let [name, setName] = React.useState('');

    const inputChangeHandler = (e) => {
        setName(e.target.value);
    };

    return(
        <>
        {name && <h2>Counter - {name}</h2>}

        {name === 'Pesho' 
            ? <h3>He is the best!</h3> 
            : <h3>wtf?</h3>
        }

        <ul>
            <SinglePurpose>{count}</SinglePurpose>
        </ul>

        <button onClick={() => setCount(count + 1)}>Add number</button>

        <p><input type="text" onChange={inputChangeHandler} /></p>
        </>
    );
}

export default Counter;