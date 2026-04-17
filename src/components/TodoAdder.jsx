import Button from "./Button";
import { useState } from "react";

export default function TodoAdder({ addTodo }) {
    const [inputTodo, setInputTodo] = useState('');
    //submit이면 handleSubmit이 실행하자
    //handleSubmit
    //text 받아서 addTodo(text)실행하자
    return (
        <form className="todo_form" onSubmit={()=>addTodo(inputTodo)}>
            <input 
                type="text" 
                placeholder="할 일을 입력하세요." 
                className="todo_input" 
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}
            />
            <button type='submit' className="todo_button todo_button--add">Add</button>
        </form>
    )
}