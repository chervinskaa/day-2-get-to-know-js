const showBtn = document.getElementById("show-form-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-modal");
const taskForm = document.getElementById("task-form");


showBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskInput = document.getElementById("task");
  const taskText = taskInput.value;

  // Створити новий елемент і додати в task-list 

  if (taskText.trim() === "") {
    return; 
  }
  
  const taskList = document.getElementById("task-list");
  const newTask = document.createElement("li");
  newTask.textContent = taskText;
  taskList.appendChild(newTask);
  taskInput.value = "";



});
