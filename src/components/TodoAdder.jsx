import Button from "./Button";


export default function TodoAdder() {
    return (
        <form className="todo_form">
            <input type="text" placeholder="할 일을 입력하세요." className="todo_input" />
            <button type='submit' className="todo_button todo_button--add">Add</button>
        </form>
    )
}