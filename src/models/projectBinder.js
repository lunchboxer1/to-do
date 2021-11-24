import TodoFactory from './todo';
import ProjectFactory from './project';

const ProjectBinder = () => {
  const projects = [];
  const todos = [];

  const addProject = (project) => projects.push(project);
  const removeProject = (project) => projects.pop(project);
  const addToDo = (todo) => todos.push(todo);
  const removeToDo = (todo) => todos.pop(todo);
  const getProjects = () => projects;
  const getTodos = () => todos;
  const getProject = (projectName) => projects.find((element) => element.name === projectName);

  const buildTestDataPackage = () => {
    let tempProj = ProjectFactory('Novel Draft', null);

    tempProj.addToDo(TodoFactory('Evaluate', 'c'));
    tempProj.addToDo(TodoFactory('Proof Read', 'p'));
    tempProj.addToDo(TodoFactory('Edit', 'p'));
    addProject(tempProj);

    tempProj = ProjectFactory('Organize');
    tempProj.addToDo(TodoFactory('Sort', 'c'));
    tempProj.addToDo(TodoFactory('Donate', 'p'));
    tempProj.addToDo(TodoFactory('Trash', 'p'));
    addProject(tempProj);

    addToDo(TodoFactory('Call boss', 'p'));
    addToDo(TodoFactory('Buy cake', 'p'));
  };

  return {
    addProject,
    removeProject,
    getProjects,
    addToDo,
    removeToDo,
    getTodos,
    buildTestDataPackage,
    getProject,
  };
};

export default ProjectBinder;
