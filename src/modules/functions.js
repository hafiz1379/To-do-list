// RENDER
export function render(tasks) {
  const todoListContainer = document.querySelector('#todo-list');
  todoListContainer.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    let checked = '';
    if (tasks[i].completed) checked = 'checked';
    const html = `
      <div class="taskContainer">
        <input type="checkbox" class="checkBox" ${checked}>
        <input class="taskText" value="${tasks[i].description}"></input>
        <button class="saveBtn hidden" type="button">&#x1F4BE;</button>
        <button class="removeBtn" type="button">&#x1F5D1;</button>       
      </div>
    `;
    todoListContainer.innerHTML += html;
  }
}

// ADD
export function add(tasks, task) {
  tasks.push({ description: task, completed: false, index: tasks.length + 1 });
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// REMOVE
export function remove(tasks, index) {
  tasks.splice(index, 1);
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// COMPLETED
export function complete(tasks, index) {
  if (tasks[index].completed) tasks[index].completed = false;
  else tasks[index].completed = true;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// EDIT
export function edit(tasks, index, newTask) {
  tasks[index].description = newTask;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// CLEAR ALL COMPLETED
export function clearCompleted(tasks) {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed) {
      tasks.splice(i, 1);
      i -= 1;
    }
  }
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
