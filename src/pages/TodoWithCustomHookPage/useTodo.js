import {useRecoilState} from "recoil";
import {todoListState} from "../../atoms/todo.jsx";

export const useTodo = () => {

  const [todoList, setTodoList] = useRecoilState(todoListState);

  const loadTodoList = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    setTodoList(data);
  }

  const changeCheckbox = (todoId) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== todoId))
  }

  return {
    todoList,
    loadTodoList,
    changeCheckbox,
    deleteTodo
  }
}
