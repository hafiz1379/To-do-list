import remove from './remove.js';

export default () => {
  const checkboxs = document.querySelectorAll('.checkbox');
  const arr = Array.from(checkboxs);
  const checkboxCheck = arr.filter((check) => check.checked === true);
  checkboxCheck.forEach((cheked) => {
    remove(cheked.nextSibling.value);
    cheked.parentElement.remove();
  });
};