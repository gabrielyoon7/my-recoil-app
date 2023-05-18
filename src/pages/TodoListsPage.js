import TodoList from "../components/todo/TodoList";

function TodoListsPage() {
  return (
    <>
      <h1>값을 전역으로 관리하는 기능 (배열)</h1>
      <TodoList />
      <TodoList />
    </>
  )
}

export default TodoListsPage;
