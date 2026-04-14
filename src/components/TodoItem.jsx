import Checkbox from './checkbox.jsx';
import Button from './Button.jsx';

export default function TodoItem() {
    return (
        <li className="todo_item">
            <Checkbox id="1" />
            <span className="todo_text">할 일 예시입니다.</span>
            <Button className="todo_button todo_button--edit">✏️</Button>
            <Button className="todo_button todo_button--delete">🗑️</Button>
        </li>
    )
}