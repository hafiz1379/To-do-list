(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

class Task {
  static tasks = [
    {
      id: 0,
      description: 'Coding',
      completed: false,
    },
    {
      id: 1,
      description: 'Play game',
      completed: false,
    },
    {
      id: 2,
      description: 'Watch a movie',
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsU0FBUyx1Q0FBdUM7QUFDbEYseURBQXlELGdDQUFnQztBQUN6RixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRhc2sge1xuICBzdGF0aWMgdGFza3MgPSBbXG4gICAge1xuICAgICAgaWQ6IDAsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NvZGluZycsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBkZXNjcmlwdGlvbjogJ1BsYXkgZ2FtZScsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBkZXNjcmlwdGlvbjogJ1dhdGNoIGEgbW92aWUnLFxuICAgICAgY29tcGxldGVkOiB0cnVlLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmlkID0gVGFzay50YXNrcy5sZW5ndGg7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlVGFza1N0YXR1cyhpZCkge1xuICAgIFRhc2sudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICAgIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4gIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgVGFzay50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaS5jbGFzc05hbWUgPSAndG9kby1pdGVtJztcbiAgICAgIGxpLmlubmVySFRNTCA9IGAgXG4gICAgICAgIDxsYWJlbCBkYXRhLWlkPSR7dGFzay5pZH0gY2xhc3M9XCIke3Rhc2suY29tcGxldGVkID8gJ3RvZG8tY29tcGxldGVkJyA6ICcnfVwiPiBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidG9kby1pdGVtLWNoZWNrXCIgJHt0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfT4gXG4gICAgICAgICR7dGFzay5kZXNjcmlwdGlvbn0gICAgXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLXYgaXRlbS1lZGl0LWljb25cIj48L2k+IFxuICAgICAgICBgO1xuICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuICB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==