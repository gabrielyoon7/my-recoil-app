import {atom, selector} from "recoil";

export const repositoryTodoState = atom({
  key:'repositoryTodoState',
  default:[{
    id: 0,
    description: '헬로리코일: 0'
  }]
})

export const todoRepository=selector({
  key:'todoRepository',
  get:({get,getCallback})=>{

    const addTodo = getCallback(({ set,snapshot }) => async () => {
      const todoList = await snapshot.getPromise(repositoryTodoState)
      const newId = todoList.length;
      set(repositoryTodoState, (prev) => [...prev, {
        id:newId,
        description:`헬로리코일: ${newId}`
      }]);
    });

    const deleteTodo = getCallback(({set})=>async()=>{
      set(repositoryTodoState,prev=>[...prev.slice(0,prev.length-1)])
    })

    return {
      addTodo,
      deleteTodo
    }
  }
})
