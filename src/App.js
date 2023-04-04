import { RecoilRoot } from "recoil";
import Counter from "./Counter";


function App() {
  return (
    <RecoilRoot>
      <Counter />
      <Counter />
    </RecoilRoot>
  );
}

export default App;
