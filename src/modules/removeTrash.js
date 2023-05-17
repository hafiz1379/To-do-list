import remove from './remove.js';

export default () => {
  const trash = document.querySelector('.trash-can');
  trash.onclick = () => {
    remove(trash.previousSibling.value);
  };
};
