export default function Checkbox(props) {
    const {id, ...rest} = props;
    return (
        <>
            <input type="checkbox" id={`chk-${id}`} className="todo__check" {...rest} />
            <label htmlFor={`chk-${id}`} className="todo__label">{children}</label>
        </>
    )
}