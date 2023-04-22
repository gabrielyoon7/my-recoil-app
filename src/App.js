import { RecoilRoot } from "recoil";
import PostList from "./components/PostList";
import Counter from "./components/counter/Counter";
import CharacterCounter from "./components/characterCounter/CharacterCounter";
import TodoList from "./components/todo/TodoList";

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
      <hr />
      <PostList />
    </RecoilRoot>
  );
}

export default App;
