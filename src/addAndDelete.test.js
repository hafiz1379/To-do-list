import add from './modules/add.js';
import removeTask from './remove.js';

describe('Add test', () => {
  test('should save to localStorage', () => {
    localStorage.setItem('tasks', '[]');
    add('hello');
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([{ completed: false, description: 'hello', index: 1 }]);
  });
});

describe('removeTask', () => {
  beforeEach(() => {
    const tasks = [
      {
        index: 1,
        description: 'Code for 5 hours',
        completed: false,
      },
      {
        index: 2,
        description: 'Play soccer',
        completed: false,
      },
      {
        index: 3,
        description: 'Take a walk in the park',
        completed: false,
      },
      {
        index: 4,
        description: 'Play soccer',
        completed: false,
      },
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Creating the DOM elements for the test
    const taskElements = tasks.map((task) => {
      const li = document.createElement('li');
      li.dataset.index = task.index;
      const span = document.createElement('span');
      span.className = 'trash-can';
      li.appendChild(span);
      return li;
    });
    const container = document.createElement('ul');
    taskElements.forEach((taskElement) => {
      container.appendChild(taskElement);
    });
    document.body.appendChild(container);
  });

  afterEach(() => {
    localStorage.removeItem('tasks');
    document.body.innerHTML = '';
  });

  test('removes the task with the given index from localStorage and the DOM', () => {
    const indexToRemove = 2;
    removeTask(indexToRemove);

    // Check the modified tasks in localStorage
    const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
    const expectedTasks = [
      {
        index: 1,
        description: 'Code for 5 hours',
        completed: false,
      },
      {
        index: 2,
        description: 'Take a walk in the park',
        completed: false,
      },
      {
        index: 3,
        description: 'Play soccer',
        completed: false,
      },
    ];
    expect(updatedTasks).toEqual(expectedTasks);

    const removedElement = document.querySelector('li[data-index="2"]');
    expect(removedElement).toBeNull();
  });
});
