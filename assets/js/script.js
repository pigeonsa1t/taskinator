//________________________________________________________________________________//
// GLOBAL VARIABLES:

// the buttonEl variable refers to DOM id="save-task"
var buttonEl = document.querySelector("#save-task");
// the tasksToDoEl variable refers to DOM id="tasks-to=do"
var tasksToDoEl = document.querySelector("#tasks-to-do");

// on button click, create a task
var createTaskHandler = function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);

//________________________________________________________________________________//
// FUNCTIONS: //


//________________________________________________________________________________//
// EXPORTS: //


//________________________________________________________________________________//
