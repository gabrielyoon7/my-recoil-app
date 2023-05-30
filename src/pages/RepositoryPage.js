import {useRecoilValue} from "recoil";
import {todoRepository} from "../atoms/repositoryAtom";

function RepositoryPage(){
  const todoState = useRecoilValue(todoRepository);

  return(
    <div>
      {
        todoState.getTodo().map((todo) =>(
          <div key={todo.id}>{todo.description}</div>
        ))
      }
      <button onClick={()=>todoState.addTodo(todoState.getTodo().length)}>데이터 추가하기</button>
    </div>
  )
}

export default RepositoryPage;
