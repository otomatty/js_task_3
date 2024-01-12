let taskId = 0;
const tasks = [];

document.getElementById("addButton").addEventListener("click", () => {
  const taskComment = document.getElementById("taskInput").value;
  const task = {
    id: taskId++,
    comment: taskComment,
    status: "作業中",
  };
  tasks.push(task);
  displayTasks();
  document.getElementById("taskInput").value = "";
});

function displayTasks() {
  const taskTable = document.getElementById("taskTable");
  while (taskTable.rows[1]) taskTable.deleteRow(1);
  tasks.forEach((task) => {
    const row = taskTable.insertRow(-1);
    row.insertCell(-1).innerText = task.id;
    row.insertCell(-1).innerText = task.comment;
    row.insertCell(-1).innerText = task.status;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    row.insertCell(-1).appendChild(deleteButton);
  });
}
