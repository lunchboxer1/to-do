import '../../style/compStyle.css';
import './style.css';

const contentComponent = () => {
  let divComp;
  let listContent;
  let listItems = [];

  const fillList = (arr) => {
    arr.forEach((element) => {
      const item = document.createElement('li');
      // item.classList.add('component');
      item.classList.add('contentList');
      item.textContent = element;
      listContent.appendChild(item);
    });
  };

  const buildComponent = () => {
    divComp = document.createElement('div');
    divComp.id = 'content';
    divComp.classList.add('component');

    listContent = document.createElement('ul');
    listContent.classList.add('contentList');

    listItems.push('Welcome');
    listItems.push('To get started select a todo from the side bar');

    fillList(listItems);

    divComp.appendChild(listContent);

    // Default to active
    divComp.style.display = 'flex';
  };

  const getComponent = () => divComp;

  const activate = () => {
    divComp.style.display = 'flex';
  };

  const deactivate = () => {
    divComp.style.display = 'none';
  };

  const update = (project) => {
    while (listContent.firstChild) {
      listContent.removeChild(listContent.firstChild);
    }

    listItems = [];

    project.getTodos().forEach((element) => {
      listItems.push(element.name);
    });

    fillList(listItems);
  };

  buildComponent();

  return {
    getComponent,
    activate,
    deactivate,
    update,
  };
};

export default contentComponent;
