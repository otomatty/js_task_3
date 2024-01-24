let taskId = 0;
const tasks = [];

document.getElementById('addButton').addEventListener('click', () => {
  const taskComment = document.getElementById('taskInput').value;
  const task = {
    id: taskId++,
    comment: taskComment,
    status: '作業中',
  };
  tasks.push(task);
  displayTasks();
  document.getElementById('taskInput').value = '';
});

const createStatusButton = (status) => {
  const statusButton = document.createElement('button');
  statusButton.innerText = status;

  return statusButton;
};

const createDeleteButton = () => {
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  return deleteButton;
};

const displayTasks = () => {
  const taskTable = document.getElementById('taskTable');
  for (let i = taskTable.rows.length - 1; i > 0; i--) {
    taskTable.deleteRow(i);
  }
  tasks.forEach((task) => {
    const row = taskTable.insertRow(-1);
    row.insertCell(-1).innerText = task.id;
    row.insertCell(-1).innerText = task.comment;
    const statusButton = createStatusButton(task.status);
    row.insertCell(-1).appendChild(statusButton);
    const deleteButton = createDeleteButton();
    row.insertCell(-1).appendChild(deleteButton);
  });
};
