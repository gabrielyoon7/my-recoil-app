import { RecoilRoot } from "recoil";
import Counter from "./counter/Counter";
import TodoList from "./todo/TodoList";


function App() {
  return (
    <RecoilRoot>
      <Counter />
      <Counter />
      <hr />
      <TodoList />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
