import uniqid from 'uniqid';

function ArrayNumbers () {
    let numbers = [1, 2, 3, 4, 5, 6];

    let mappedNumbers = numbers.map((x, i) => <li key={i}>{x}</li>);

    return(
        <div>
            <ul>
                {mappedNumbers}
            </ul>
        </div>
    );
}

export default ArrayNumbers;