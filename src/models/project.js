import todoFactory from "./todo";

const projectFactory = (name, todos) => {
  const projectTodos = todos;
  const addToDo = (todo) => projectTodos.push(todo);
  const removeToDo = (todo) => projectTodos.pop(todo);
  const getToDos = () => projectTodos;

  return { name, addToDo, removeToDo, getToDos };
};

export { projectFactory };
