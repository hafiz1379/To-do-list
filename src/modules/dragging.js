function NewObject(description, completed, index) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}
function refresh() {
  const tasks = document.querySelectorAll('.task-item');
  const newData = [];
  let index = 1;

  tasks.forEach((task) => {
    const orderTask = new NewObject(task.childNodes[1].value, task.childNodes[0].checked, index);
    newData.push(orderTask);
    index += 1;
  });
  localStorage.setItem('tasks', (JSON.stringify(newData)));
}

export default function dragging(node) {
  const holder = document.querySelector('.ul-to-do');
  const listItems = document.querySelectorAll('.task-item');
  node.draggable = true;
  node.addEventListener('dragend', () => {
    listItems.forEach((item) => {
      item.classList.remove('bg-gray');
      item.childNodes[1].classList.remove('bg-gray');
    });
    node = undefined;
  });

  holder.addEventListener('dragover', (e) => {
    if (node === undefined) {
      return;
    }
    e.preventDefault();
    node.classList.add('bg-gray');
    node.childNodes[1].classList.add('bg-gray');
    const mouse = e.clientY;
    const positions = [];
    let where;
    listItems.forEach((element) => {
      positions.push(element.getBoundingClientRect().y);
      where = positions.findIndex((item) => item > mouse);
    });
    const nodeToinsertBefore = listItems[where];
    if (nodeToinsertBefore === undefined) {
      holder.appendChild(node);
    } else {
      holder.insertBefore(node, nodeToinsertBefore);
    }
  });

  holder.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    refresh();
  });
}