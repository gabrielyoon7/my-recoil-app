import {useRecoilValue} from "recoil";
import {repositoryTodoState, todoRepository} from "../atoms/repositoryAtom";

function RepositoryPage(){
  const todoList = useRecoilValue(repositoryTodoState);
  const {addTodo,deleteTodo}=useRecoilValue(todoRepository);

  return(
    <div>

      <button
        onClick={()=>{
          addTodo();
        }}
      >
        데이터 추가하기
      </button>
      <button
        onClick={()=>deleteTodo()}
      >
        데이터 삭제하기
      </button>
      {
        todoList.map((todo) =>(
          <div key={todo.id}>{todo.description}</div>
        ))
      }
    </div>
  )
}

export default RepositoryPage;
