import Task from './modules/tasks.js';
import './style.css';
import {
  renderTasks, addButton, addInput, clearAllButton,
} from './modules/todo.js';

renderTasks(Task);

addButton.addEventListener('click', () => {
  const description = addInput.value;
  if (description) {
    Task.addTask(description);
    addInput.value = '';
    renderTasks(Task);
  }
});

clearAllButton.addEventListener('click', () => {
  const tasks = Task.getTasks();
  const newTasks = tasks.filter((task) => !task.completed);
  newTasks.forEach((task, index) => {
    task.id = index + 1;
  });

  Task.setTasks(newTasks);
  renderTasks(Task);
});