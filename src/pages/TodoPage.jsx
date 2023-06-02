import {useRecoilState} from "recoil";
import {todoListState} from "../components/todo.jsx";

function TodoPage() {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const loadTodoList = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    setTodoList(data);
  }

  const handleCheckboxChange = (todoId) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  return <>
    <button onClick={loadTodoList}>할 일 불러오기</button>
    {
      todoList.map((todo) => (
        <div key={todo.id} style={{display: 'flex'}}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckboxChange(todo.id)}
          />
          <div>{todo.title}</div>
        </div>
      ))
    }
  </>
}

export default TodoPage;
