import { RecoilRoot } from "recoil";
import PostListBasic from "./components/post/PostListBasic";
import Counter from "./components/counter/Counter";
import CharacterCounter from "./components/characterCounter/CharacterCounter";
import TodoList from "./components/todo/TodoList";
import PostListParameter from "./components/post/PostListParameter";
import TempCelcius from "./components/TempCelcius";

function App() {
  return (
    <RecoilRoot>
      <h1>값을 전역으로 관리하는 기능 (카운터)</h1>
      <Counter />
      <Counter />
      <hr />
      <h1>값을 전역으로 관리하는 기능 (배열)</h1>
      <TodoList />
      <TodoList />
      <hr />
      <h1>글자 수 세기</h1>
      <CharacterCounter />
      <hr />
      <h1>데이터 단순 요청</h1>
      <PostListBasic />
      <hr />
      <h1>데이터 파라미터로 요청</h1>
      <PostListParameter />
      <hr />
      <TempCelcius />
      <hr />
    </RecoilRoot>
  );
}

export default App;
