function SinglePurpose(props) {
    let color = 'black';

    if (props.children > 0) {
        color = 'pink';
    }

    return <li style={{color}}>{props.children}</li>
}

export default SinglePurpose;