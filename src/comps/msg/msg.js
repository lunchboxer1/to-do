import '../../style/compStyle.css';
import './style.css';

const msgComponent = () => {
  let divComp;

  const buildComponent = () => {
    divComp = document.createElement('p');
    divComp.id = 'msg';
    divComp.classList.add('component');

    divComp.textContent = 'Component';

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

export default msgComponent;
