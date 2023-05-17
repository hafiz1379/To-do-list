export default (description) => {
  const toModify = JSON.parse(localStorage.getItem('tasks'));
  let ind;
  toModify.forEach((element) => {
    if (element.description === description) {
      ind = element.index;
    }
  });
  toModify.splice(ind - 1, 1);
  let newIndex = 1;
  toModify.forEach((element) => {
    element.index = newIndex;
    newIndex += 1;
  });

  const toStorage = JSON.stringify(toModify);
  localStorage.setItem('tasks', toStorage);
  const trashCans = document.querySelectorAll('.trash-can');
  trashCans.forEach((can) => {
    can.parentElement.remove();
  });
};
