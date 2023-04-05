import { RecoilRoot } from "recoil";
import Counter from "./counter/Counter";
import TodoList from "./todo/TodoList";
import CharacterCounter from "./characterCounter/CharacterCounter";


function App() {
  return (
    <RecoilRoot>
      <Counter />
      <Counter />
      <hr />
      <TodoList />
      <TodoList />
      <hr />
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
