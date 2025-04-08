function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const taskList = document.getElementById("taskList");
  
    const newTask = document.createElement("li");
  
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    newTask.appendChild(taskContent);
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
      taskList.removeChild(newTask);
    };
    newTask.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = function() {
      const newTaskText = prompt("Edit the task:", taskContent.textContent);
      if (newTaskText) {
        taskContent.textContent = newTaskText.trim();
      }
    };
    newTask.appendChild(editBtn);
  
    newTask.onclick = function() {
      newTask.classList.toggle("completed");
    };
  
    taskList.appendChild(newTask);
  
    taskInput.value = "";
}
  