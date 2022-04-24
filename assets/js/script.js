//________________________________________________________________________________//
// GLOBAL VARIABLES:

// this variable now refers to the entire form element containing the button:
var formEl = document.querySelector('#task-form')
// the tasksToDoEl variable refers to DOM id="tasks-to=do"
var tasksToDoEl = document.querySelector("#tasks-to-do");

// on button click, create a task
var taskFormHandler = function(event) {
// The best way to explore the data provided to an event object 
  // is to use console.log(event); in the function handling the event.
  event.preventDefault();
  // When we use square brackets [ ] in a selector, we're trying to select 
    // an HTML element by one of its attributes. In this case, we're selecting 
    // the <input> element on the page that has a name attribute set to a value 
    // of "task-name".
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = documenet.querySelector("select[name='task-type']").value;

  // package up data as an object:
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput 
  };

  // send it as an argument to createTaskEl:
  createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
    var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item:
  var taskInfoEl = document.createElement("div");
  // give it a class name: 
  taskInfoEl.className = "task-info";
  
  // add HTML content to div:
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list:
  tasksToDoEl.appendChild(listItemEl);
}

// find and interact with the DOM form element:
formEl.addEventListener("submit", taskFormHandler);

//________________________________________________________________________________//
// FUNCTIONS: //


//________________________________________________________________________________//
// EXPORTS: //


//________________________________________________________________________________//


// To begin, we'll move the event listener from the <button> element that we added in 
// the last lesson and apply it to the <form> element itself. Now the browser will be able 
// to listen to an event happening on the entire form rather than just the button.

