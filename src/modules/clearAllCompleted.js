export default () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  const arr = Array.from(checkboxes);
  const checkedCheckboxes = arr.filter((check) => check.checked === true);

  checkedCheckboxes.forEach((checked) => {
    const { parentElement } = checked;
    parentElement.parentNode.removeChild(parentElement);
  });
};
