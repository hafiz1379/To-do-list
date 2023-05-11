import Task from './modules/tasks.js';
import './style.css';
import {
  renderTasks, addButton, addInput, clearAllButton,
} from './modules/todo.js';

function addTask() {
  const description = addInput.value;
  if (description) {
    Task.addTask(description);
    addInput.value = '';
    renderTasks(Task);
  }
}

renderTasks(Task);

addButton.addEventListener('click', () => {
  addTask();
});

addInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
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
