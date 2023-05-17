import './style.css';
import dots from './icons/dots.png';
import refresh from './icons/refresh.png';
import enter from './icons/enter.png';
import trash from './icons/trash.png';
import addTask from './modules/add.js';
import removeTrash from './modules/removeTrash.js';
import editTask from './modules/editTask.js';
import check from './modules/check.js';
import clearAllCompleted from './modules/clearAllCompleted.js';
import dragging from './modules/dragging.js';

const inputAdd = document.getElementById('add-text');
const refreshIcon = document.querySelector('.refresh');
const enterIcon = document.querySelector('.enter');
const holder = document.querySelector('.ul-to-do');
const buttonClear = document.querySelector('.btn-holder');

refreshIcon.src = refresh;
enterIcon.src = enter;

// this function changes the background color to yellow when the user is on the input
function changeIcon() {
  const tasksItems = document.querySelectorAll('.task-item');
  const taskText = document.querySelectorAll('.task-text');
  taskText.forEach((task) => {
    task.addEventListener('click', () => {
      task.nextSibling.src = trash;
      task.nextSibling.classList.add('trash-can');
      task.classList.add('bg-yellow');
      task.parentNode.classList.add('bg-yellow');
      removeTrash();
    });
    const currentValue = task.value;
    task.addEventListener('change', () => {
      editTask(currentValue, task.value);
    });
  });
  tasksItems.forEach((item) => {
    item.addEventListener('mouseleave', () => {
      item.lastChild.src = dots;
      item.lastChild.classList.remove('trash-can');
      item.classList.remove('bg-yellow');
      item.childNodes[1].classList.remove('bg-yellow');
    });
  });
}
// this function build the list with the task items
function listConstructor() {
  if (localStorage.getItem('tasks') === '' || localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', '[]');
  }
  const toConstruct = JSON.parse(localStorage.getItem('tasks'));
  toConstruct.sort((x, y) => x.index - y.index);
  toConstruct.forEach((item) => {
    const newLi = document.createElement('li');
    newLi.classList.add('li-to-do');
    newLi.classList.add('task-item');
    let compOrNot = 'none';
    if (item.completed === true) {
      compOrNot = 'line-through';
    }
    newLi.innerHTML = `<input type="checkbox"  class="checkbox"><input type="text" class="li-description task-text" style="text-decoration: ${compOrNot}" value ="${item.description}"><img src="${dots}" class="icon">`;
    holder.appendChild(newLi);
  });

  changeIcon();
  check();
  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon) => {
    icon.addEventListener('mousedown', () => {
      icon.draggable = false;
      if (icon.classList.contains('trash-can') === false) {
        dragging(icon.parentNode);
      }
    });
  });
}

// this function deletes the task list
function deletePrevious() {
  const children = holder.childNodes;
  const counter = children.length;
  for (let i = 5; i < counter; i += 1) {
    if (children.length > 4) {
      holder.removeChild(children[5]);
    }
  }
}

inputAdd.onchange = () => {
  deletePrevious();
  addTask(inputAdd.value);
  inputAdd.value = '';
  listConstructor();
};

window.onload = () => {
  if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', '[]');
  }
  listConstructor();
};

buttonClear.onclick = () => {
  clearAllCompleted();
};
