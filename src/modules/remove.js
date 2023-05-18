const remove = (indexToRemove) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const taskIndex = tasks.findIndex((task) => task.index === indexToRemove);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    tasks.forEach((task, index) => {
      task.index = index + 1;
    });

    const toStorage = JSON.stringify(tasks);
    localStorage.setItem('tasks', toStorage);

    const trashCans = document.querySelectorAll('.trash-can');
    trashCans.forEach((can) => {
      if (can.parentElement.dataset.index === indexToRemove.toString()) {
        can.parentElement.remove();
      }
    });
  }
};

export default remove();
