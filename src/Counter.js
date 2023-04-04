import { useRecoilState } from 'recoil';
import { counterState } from './atoms';

function Counter() {
  const [counter, setCounter] = useRecoilState(counterState);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
