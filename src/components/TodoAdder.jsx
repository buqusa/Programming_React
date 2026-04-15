import Button from "./Button";


export default function TodoAdder({ addTodo }) {
    //submit이면 handleSubmit이 실행하자
    //handleSubmit
    //text 받아서 addTodo(text)실행하자
    return (
        <form className="todo_form">
            <input type="text" placeholder="할 일을 입력하세요." className="todo_input" />
            <button type='submit' className="todo_button todo_button--add">Add</button>
        </form>
    )
}