function TodoListApp() {
  return (
    <div>
        <h1>No Think, Do it.</h1>
        <from>
            <input type="text" placeholder='할 일을 입력하세요.' />
            <button>Add</button>
        </from>
        <ul>
            <li>
                <input type="checkbox" name="" id="chk-1" />
                <lable htmlFor="chk-1">think</lable>
                <button>✏️</button>
                <button>🗑️</button>
            </li>
            {/*li{$할일}*10*/}
        </ul>
    </div>
  )
}
export default TodoListApp;