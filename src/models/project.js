const ProjectFactory = (name) => {
  const projectTodos = [];
  const addToDo = (todo) => projectTodos.push(todo);
  const removeToDo = (todo) => projectTodos.pop(todo);
  const getTodos = () => projectTodos;

  return {
    name,
    addToDo,
    removeToDo,
    getTodos,
  };
};

export default ProjectFactory;
