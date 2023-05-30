function SinglePurpose(props) {
    let color = 'black';

    if (props.children <= 0) {
        return <li style={{color}}>{props.children}</li>
    }

    if (props.children > 0) {
        color = 'pink';

        return <li style={{color}}>{props.children}</li>
    }

    return <li key={props.children.id}>{props.children.text}</li>
}

export default SinglePurpose;