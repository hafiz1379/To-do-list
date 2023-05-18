import './style.css';
import {
  render, add, remove, complete, clearCompleted, edit,
} from './modules/functions.js';

const task = document.querySelector('#new-task-input');
const addBtn = document.querySelector('#addBtn');

// RENDER
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  render(tasks);
});

// ADD
const addTask = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  if (task.value) {
    add(tasks, task.value);
    render(tasks);
  }
  task.value = '';
};
addBtn.addEventListener('click', addTask);

task.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

// REMOVE AND COMPLETED
document.addEventListener('click', (event) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // REMOVE
  if (event.target && event.target.matches('.removeBtn')) {
    const removeBtns = document.querySelectorAll('.removeBtn');
    const index = Array.prototype.indexOf.call(removeBtns, event.target);
    remove(tasks, index);
    render(tasks);
  }
  // COMPLETED
  if (event.target && event.target.matches('.checkBox')) {
    const checkBoxes = document.querySelectorAll('.checkBox');
    const index = Array.prototype.indexOf.call(checkBoxes, event.target);
    complete(tasks, index);
    render(tasks);
  }
  // EDIT
  if (event.target && event.target.matches('.taskText')) {
    const saveBtn = event.target.parentElement.querySelector('.saveBtn');
    saveBtn.classList.remove('hidden');
  }
  if (event.target && event.target.matches('.saveBtn')) {
    const saveBtns = document.querySelectorAll('.saveBtn');
    const newTasks = document.querySelectorAll('.taskText');
    const index = Array.prototype.indexOf.call(saveBtns, event.target);
    const newTask = newTasks[index].value;
    edit(tasks, index, newTask);

    const saveBtn = event.target.parentElement.querySelector('.saveBtn');
    saveBtn.classList.add('hidden');
  }
});

// CLEAR ALL COMPLETED
const clearCompletedBtn = document.querySelector('#clear-completed');
clearCompletedBtn.addEventListener('click', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  clearCompleted(tasks);
  render(tasks);
});
