export default (description, newDescription) => {
  const toModify = JSON.parse(localStorage.getItem('tasks'));
  toModify.forEach((element) => {
    if (element.description === description) {
      element.description = newDescription;
    }
  });
  const toStorage = JSON.stringify(toModify);
  localStorage.setItem('tasks', toStorage);
};