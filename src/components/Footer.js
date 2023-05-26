function Footer(props) {
    return(
        <p style={{color: props.color}}>{props.children}</p>
    );
}

export default Footer;