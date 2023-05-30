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
    const todoList = get(repositoryTodoState);

    const getTodo = () => {
      return todoList;
    }

    const addTodo = getCallback(({ set }) => (newId) => {
      set(repositoryTodoState, (prev) => [...prev, {
        id:newId,
        description:`헬로리코일: ${newId}`
      }]);
    });

    return {
      getTodo,
      addTodo
    }

  }
})
