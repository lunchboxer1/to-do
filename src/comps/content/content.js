import '../../style/compStyle.css';
import './style.css';
import model from '../../models/model';

const contentComponent = (dataModel) => {
  let divComp;

  const buildComponent = () => {
    divComp = document.createElement('p');
    divComp.id = 'content';
    divComp.classList.add('component');

    divComp.textContent = 'Content';

    console.log(dataModel.getToDos()[0].name);
    console.log(dataModel.getProjects()[0].getToDos()[0].name);

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

  buildComponent();

  return { getComponent, activate, deactivate };
};

export default contentComponent;
