import {useRecoilState} from "recoil";
import {todoListState} from "../../atoms/todo.jsx";

function TodoWithUseRecoilCallbackPage() {
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

  const handleDelete = (todoId) => {
    setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== todoId))
  }

  return (
    <>
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
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </div>
        ))
      }
    </>
  )
}

export default TodoWithUseRecoilCallbackPage;

