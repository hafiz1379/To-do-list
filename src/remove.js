export default (indexToRemove) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const taskIndex = tasks.findIndex((task) => task.index === indexToRemove);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    tasks.forEach((task, index) => {
      task.index = index + 1;
    });

    // Save the modified tasks to localStorage
    const toStorage = JSON.stringify(tasks);
    localStorage.setItem('tasks', toStorage);

    // Remove the corresponding task element from the DOM
    const trashCans = document.querySelectorAll('.trash-can');
    trashCans.forEach((can) => {
      if (can.parentElement.dataset.index === indexToRemove.toString()) {
        can.parentElement.remove();
      }
    });
  }
};
