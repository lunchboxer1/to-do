import './style/style.css';
import msgComponent from './comps/msg/msg';
import printMe from './comps/print/print';
import navBarComponent from './comps/navBar/navBar';
import sideBarComponent from './comps/sideBar/sideBar';
import contentComponent from './comps/content/content';
import ProjectBinder from './models/projectBinder';
// import navBar from './comps/navBar/navBar';

import TodoFactory from './models/todo';
import ProjectFactory from './models/project';



function main() {
  // Definitions
  const binder = ProjectBinder();

  binder.buildTestDataPackage();

  // Create the main page container
  const mainContainer = document.createElement('div');
  const content = contentComponent();
  const navBar = navBarComponent();
  const secContainer = document.createElement('div');
  const sideBar = sideBarComponent();

  // Add class to components
  mainContainer.classList.add('mainContainer');
  secContainer.classList.add('secContainer');

  // Callbacks
  const sideBarCallback = (e) => {
    console.log('got the callback');
    console.log(e.srcElement.innerHTML);

    // Send the project to the content screen so it can render
    content.update(binder.getProject(e.srcElement.innerHTML));
  };

  // Temp elements for testing only
  const btn = document.createElement('button');

  mainContainer.textContent = 'Hello webpackererer';

  btn.textContent = 'Click me and check the console 2';

  printMe();

  mainContainer.appendChild(btn);

  const msg = msgComponent();
  mainContainer.appendChild(msg.getComponent());

  btn.onclick = () => {
    console.log('Hey');
    msg.deactivate();
  };
  // end temp

  // Build the relationships between componenents
  mainContainer.appendChild(navBar.getComponent());
  secContainer.appendChild(sideBar.getComponent());
  secContainer.appendChild(content.getComponent());
  mainContainer.appendChild(secContainer);

  // Initialize components
  sideBar.update(binder, sideBarCallback);

  return mainContainer;
}

document.body.appendChild(main());
