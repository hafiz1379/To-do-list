import './style.css';

class Task {
  static tasks = [
    {
      id: 0,
      description: 'Do laundry',
      completed: false,
    },
    {
      id: 1,
      description: 'Buy groceries',
      completed: false,
    },
    {
      id: 2,
      description: 'Go for a run',
      completed: true,
    },
  ];

  constructor(description) {
    this.id = Task.tasks.length;
    this.description = description;
    this.completed = false;
  }

  static toggleTaskStatus(id) {
    Task.tasks.forEach((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    });
  }
}

window.onload = () => {
  const todoList = document.querySelector('.todo-list');
  Task.tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = ` 
      <label data-id=${task.id} class="${task.completed ? 'todo-completed' : ''}"> 
      <input type="checkbox" class="todo-item-check" ${task.completed ? 'checked' : ''}> 
      ${task.description}    
      </label>
      <i class="fas fa-ellipsis-v item-edit-icon"></i> 
      `;
    todoList.appendChild(li);
  });
};