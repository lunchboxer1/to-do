const model = () => {
  const projects = [];
  const todos = [];

  const addproject = (project) => projects.push(project);
  const removeProject = (project) => projects.pop(project);
  const addToDo = (todo) => todos.push(todo);
  const removeToDo = (todo) => todos.pop(todo);
  const getProjects = () => projects;
  const getToDos = () => todos;

  return {
    addproject,
    removeProject,
    getProjects,
    addToDo,
    removeToDo,
    getToDos,
  };
};

export default model;
