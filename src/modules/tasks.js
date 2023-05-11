class Task {
  static getTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }

  static setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static addTask(description) {
    const tasks = Task.getTasks();
    const task = {
      id: tasks.length + 1,
      description,
      completed: false,
    };
    tasks.push(task);
    Task.setTasks(tasks);
    return task;
  }

  static removeTask(id) {
    const tasks = Task.getTasks();
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      for (let i = index; i < tasks.length; i += 1) {
        tasks[i].id -= 1;
      }
      Task.setTasks(tasks);
    }
  }

  static editTaskDescription(id, newDescription) {
    const tasks = Task.getTasks();
    const task = tasks.find((task) => task.id === id);
    task.description = newDescription;
    Task.setTasks(tasks);
  }

  static toggleTaskStatus(id) {
    const tasks = Task.getTasks();
    tasks.forEach((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    });
    Task.setTasks(tasks);
  }
}

export default Task;