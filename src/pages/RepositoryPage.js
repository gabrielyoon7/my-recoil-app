import {useRecoilValue} from "recoil";
import {todoRepository} from "../atoms/repositoryAtom";

function RepositoryPage(){
  const todoState = useRecoilValue(todoRepository);

  return(
    <div>

      <button
        onClick={()=>{
          const newId = todoState.getTodo().length;
          todoState.addTodo(newId);
        }}
      >
        데이터 추가하기
      </button>
      <button
        onClick={()=>todoState.deleteTodo()}
      >
        데이터 삭제하기
      </button>
      {
        todoState.getTodo().map((todo) =>(
          <div key={todo.id}>{todo.description}</div>
        ))
      }
    </div>
  )
}

export default RepositoryPage;
