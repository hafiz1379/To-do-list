import Task from './buttons.js';
import './style.css';

var $ = document

const todoList = $.querySelector('.todo-list');
const addInput = $.querySelector('.add-input');
const addButton = $.querySelector('.add-button');
const clearAllButton = $.querySelector('.clear-all');

function renderTasks() {
  const tasks = Task.getTasks();
  todoList.innerHTML = '';
  tasks.forEach((task) => {
    const li = $.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = ` 
      <label data-id=${task.id} class="${task.completed ? 'todo-completed' : ''}"> 
      <input type="checkbox" class="todo-item-check" ${task.completed ? 'checked' : ''}> 
      <input type="text" class="todo-item-edit" value="${task.description}">
      </label>
      <i class="icon"></i> 
      `;
      const editInput = li.querySelector('.todo-item-edit');
      editInput.addEventListener('blur', () => {
        const newDescription = editInput.value;
        Task.editTaskDescription(task.id, newDescription);
        renderTasks();
      });
  
      const checkbox = li.querySelector('.todo-item-check');
      checkbox.addEventListener('change', () => {
        Task.toggleTaskStatus(task.id);
        renderTasks();
      });
  
      const deleteIcon = li.querySelector('.icon');
      deleteIcon.addEventListener('click', () => {
        Task.removeTask(task.id);
        renderTasks();
      });
      todoList.appendChild(li);
    });
  }

  addButton.addEventListener('click', () => {
    const description = addInput.value;
    if (description) {
      Task.addTask(description);
      addInput.value = '';
      renderTasks();
    }
  });
  
  clearAllButton.addEventListener('click', () => {
    const tasks = Task.getTasks();
    const newTasks = tasks.filter((task) => !task.completed);
    newTasks.forEach((task, index) => {
      task.id = index + 1;
    });
  
    Task.setTasks(newTasks);
    renderTasks();
  });
  
  renderTasks();