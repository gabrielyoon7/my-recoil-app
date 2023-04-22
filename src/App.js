import { RecoilRoot } from "recoil";
import PostListBasic from "./components/post/PostListBasic";
import Counter from "./components/counter/Counter";
import CharacterCounter from "./components/characterCounter/CharacterCounter";
import TodoList from "./components/todo/TodoList";
import PostListParameter from "./components/post/PostListParameter";

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
      <PostListBasic />
      <hr />
      <PostListParameter />
      <hr />
    </RecoilRoot>
  );
}

export default App;
