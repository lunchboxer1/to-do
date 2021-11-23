import '../../style/compStyle.css';
import './style.css';

const sideBarComponent = () => {
  let divComp;

  const buildComponent = () => {
    divComp = document.createElement('p');
    divComp.id = 'sideBar';
    divComp.classList.add('component');

    divComp.textContent = 'sideBar';

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

export default sideBarComponent;
