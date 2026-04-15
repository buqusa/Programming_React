import './todolist.css';
import { useState } from 'react';
import TodoItemEmpty from './components/TodoItemEmpty.jsx';
import Button from './components/Button.jsx';
import Checkbox from './components/checkbox.jsx';
import TodoHeader from './components/TodoHeader.jsx';
import TodoAdder from './components/TodoAdder.jsx';
import TodoItem from './components/TodoItem.jsx';
import TodoList from './components/TodoList.jsx';

class Todo{
    constructor(text) {
        this.id = Date.now();   //할일 id: 고유의 값 == new Date().getTime()
        this.text = text; //할일의 내용
        this.isCompleted = false; //할일 완료 여부
    }

}

function TodoListApp() {
    const [todos, setTodos] = useState([]);
    const addTodo = (text) => setTodos((todos) => [
        //기존 todos복사
        ...todos,
        //new Todo 만들어서
        //뒤에 추가하자
        new Todo(text)
    ]);
  return (
    <div className="todo">
        <TodoHeader />
        <TodoAdder onAdd={addTodo} />
        <TodoList/>
    </div>
  )
}
export default TodoListApp;