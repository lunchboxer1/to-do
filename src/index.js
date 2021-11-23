import './style/style.css';
import msgComponent from './comps/msg/msg';
import printMe from './comps/print/print';
import navBarComponent from './comps/navBar/navBar';
import sideBarComponent from './comps/sideBar/sideBar';
import contentComponent from './comps/content/content';
import model from './models/model';
// import navBar from './comps/navBar/navBar';

import todoFactory from './models/todo';
import { projectFactory } from './models/project';

function mainContainer() {

  let dataModel = model();
  dataModel.addToDo(todoFactory('test1', 'started'));
  dataModel.addproject(projectFactory('test Project'), null);

  const container = document.createElement('div');
  container.classList.add('mainContainer');
  const btn = document.createElement('button');

  container.textContent = 'Hello webpackererer';

  btn.textContent = 'Click me and check the console 2';

  printMe();

  container.appendChild(btn);

  const msg = msgComponent();
  container.appendChild(msg.getComponent());

  btn.onclick = () => {
    console.log('Hey');
    msg.deactivate();
    
  };

  const navBar = navBarComponent();
  container.appendChild(navBar.getComponent());




  const container2 = document.createElement('div');
  container2.classList.add('container2');


  const sideBar = sideBarComponent();
  container2.appendChild(sideBar.getComponent());

  const content = contentComponent(dataModel);
  container2.appendChild(content.getComponent());




  container.appendChild(container2);


  return container;
}

document.body.appendChild(mainContainer());
