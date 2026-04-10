export default function Button(props){
    // console.log(props);
    // console.log(props.children);
    const {children, ...rest} = props;
    return (
        <button {...rest}>{children}</button>
    )
}