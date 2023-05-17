function changeStatus(description, status) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((task) => {
    if (task.description === description) {
      task.completed = status;
    }
  });
  const toStore = JSON.stringify(tasks);
  localStorage.setItem('tasks', toStore);
}

function checkTrue() {
  const checkboxs = document.querySelectorAll('.checkbox');
  checkboxs.forEach((box) => {
    if (box.nextElementSibling.style.textDecoration === 'line-through') {
      box.checked = true;
    }
  });
}

export default () => {
  const checkboxs = document.querySelectorAll('.checkbox');
  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      const check = checkbox.checked;
      if (check === true) {
        checkbox.nextSibling.style.textDecoration = 'line-through';
        changeStatus(checkbox.nextSibling.value, check);
      } else {
        checkbox.nextSibling.style.textDecoration = 'none';
        changeStatus(checkbox.nextSibling.value, check);
      }
    });
  });
  checkTrue();
};
