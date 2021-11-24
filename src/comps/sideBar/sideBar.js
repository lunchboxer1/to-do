import '../../style/compStyle.css';
import './style.css';

const sideBarComponent = () => {
  let divComp;
  let listBar;
  let listItems = [];

  const fillList = (arr, cb) => {
    arr.forEach((element) => {
      const item = document.createElement('li');
      item.classList.add('component');
      item.textContent = element;
      item.onclick = cb;
      listBar.appendChild(item);
    });
  };

  const buildComponent = () => {
    divComp = document.createElement('div');
    divComp.id = 'sideBar';
    divComp.classList.add('component');

    // Define the list element
    listBar = document.createElement('ul');
    listBar.classList.add('sideBarList');
    listBar.classList.add('component');

    // Add a placeholder item to the list to be rendered
    listItems.push('Side Bar');

    // Render the items int he arary to the list
    fillList(listItems);

    divComp.appendChild(listBar);
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

  const update = (binder, cb) => {
    // Remove all children
    while (listBar.firstChild) {
      listBar.removeChild(listBar.firstChild);
    }

    // Clear array
    listItems = [];

    // Fill in the sidebar content
    binder.getProjects().forEach((element) => {
      listItems.push(element.name);
      console.log(element.name);
    });

    fillList(listItems, cb);
  };

  buildComponent();

  return {
    getComponent,
    activate,
    deactivate,
    update,
  };
};

export default sideBarComponent;
