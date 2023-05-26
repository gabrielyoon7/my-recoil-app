import { useRecoilCallback, useRecoilValue } from "recoil";
import { postsState } from "../atoms/postsAtoms";

function UseRecoilCallbackPage() {

  const sentences = useRecoilValue(postsState);

  const addRandomSentence = useRecoilCallback(({ snapshot, set }) => async () => {
    const postId = Math.floor(Math.random() * 100) + 1;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const newSentence = await response.json();
    const currentArray = await snapshot.getPromise(postsState);
    set(postsState, [...currentArray, newSentence]);
  }, []);

  return (
    <div>
      <button onClick={addRandomSentence}>아무 문장 하나 추가하기</button>
      <div>
        {sentences.map(sentence => <div key={sentence.id}>{sentence.body}</div>)}
      </div>
    </div>
  );
}

export default UseRecoilCallbackPage;
