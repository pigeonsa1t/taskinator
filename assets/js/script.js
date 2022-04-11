//________________________________________________________________________________//
// GLOBAL VARIABLES:

// this variable now refers to the entire form element containing the button:
var formEl = document.querySelector('#task-form')
// the tasksToDoEl variable refers to DOM id="tasks-to=do"
var tasksToDoEl = document.querySelector("#tasks-to-do");

// on button click, create a task
var createTaskHandler = function(event) {
// The best way to explore the data provided to an event object 
  // is to use console.log(event); in the function handling the event.
  event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

// find and interact with the DOM form element:
formEl.addEventListener("submit", createTaskHandler);

//________________________________________________________________________________//
// FUNCTIONS: //


//________________________________________________________________________________//
// EXPORTS: //


//________________________________________________________________________________//


// To begin, we'll move the event listener from the <button> element that we added in 
// the last lesson and apply it to the <form> element itself. Now the browser will be able 
// to listen to an event happening on the entire form rather than just the button.

