function SinglePurpose(props) {
    let color = 'black';

    if (props.children <= 0) {
        return <li style={{color}}>{props.children}</li>
    }

    if (props.children > 0) {
        color = 'pink';

        let numbers = [];

        for (let index = 0; index < props.children; index++) {
            numbers.push(index + 1);
        }
        
        return numbers.map(x => <li style={{color}}>{props.children}</li>)
    }

    return <li key={props.children.id}>{props.children.text}</li>
}

export default SinglePurpose;