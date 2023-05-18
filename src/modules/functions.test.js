import {
  add, remove, complete, edit, clearCompleted,
} from './functions.js';

global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

describe('add function', () => {
  test('adds one item to the tasks array', () => {
    const tasks = [];
    add(tasks, 'New task');
    expect(tasks.length).toBe(1);
  });

  test('adds a task object with the expected properties', () => {
    const tasks = [];
    add(tasks, 'New task');
    expect(tasks[0]).toEqual({
      description: 'New task',
      completed: false,
      index: 1,
    });
  });
});

describe('remove function', () => {
  test('removes one item from the tasks array', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    remove(tasks, 1);

    expect(tasks.length).toBe(2);
  });

  test('removes the correct task from the tasks array', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    remove(tasks, 1);

    expect(tasks).toEqual([
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 3', completed: false, index: 2 },
    ]);
  });

  test('updates the index property of remaining tasks in the array', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    remove(tasks, 1);

    expect(tasks[0].index).toBe(1);
    expect(tasks[1].index).toBe(2);
  });
});
describe('complete function', () => {
  test('completes a task that is not already completed', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    complete(tasks, 1);

    expect(tasks[1].completed).toBe(true);
  });

  test('uncompletes a task that is already completed', () => {
    const tasks = [
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    complete(tasks, 0);

    expect(tasks[0].completed).toBe(false);
  });
});

describe('edit function', () => {
  test('edits the description of a task', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    edit(tasks, 1, 'New task description');

    expect(tasks[1].description).toBe('New task description');
  });
});

describe('clearCompleted function', () => {
  test('removes all completed tasks from the array', () => {
    const tasks = [
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: true, index: 3 },
    ];

    clearCompleted(tasks);

    expect(tasks).toEqual([
      { description: 'Task 2', completed: false, index: 1 },
    ]);
  });

  test('updates the index property of remaining tasks in the array', () => {
    const tasks = [
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: true, index: 3 },
    ];

    clearCompleted(tasks);

    expect(tasks[0].index).toBe(1);
  });
});
