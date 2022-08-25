// Variables
let listDomActions = document.querySelector("#list");
let ulDomActions = document.getElementsByTagName("li");
let taskDom = document.querySelector("#task");
let buttonDom = document.querySelector("#liveToastBtn");



// Close & Checked buttons
for (let i = 0; i < ulDomActions.length; i++) {
  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  closeButton.onclick = removeBtn;
  ulDomActions[i].append(closeButton);
  ulDomActions[i].onclick = checkBtn;
}


// Function => Creating the list
function createList(todo) {
  const liDom = document.createElement("li");
  liDom.innerHTML = todo;
  listDomActions.appendChild(liDom);

  const closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.textContent = "\u00D7";
  liDom.append(closeButton);

  closeButton.onclick = removeBtn;
  $(".success").toast("show");
  liDom.onclick = checkBtn;
}


// Function => Adding elements
function addElement() {
  if (taskDom.value) {
    createList(taskDom.value);
    setLocalStorage(taskDom.value);
    taskDom.value = "";
  } else {
    $(".error").toast("show");
  }
}


// Function => Check Button
function checkBtn() {
  this.classList.toggle("checked");
}

// Function => Remove Button
function removeBtn() {
  this.parentElement.remove();
  deleteLocalStorage(this.previousSibling.textContent);
}



// Local Storage Arrangement
function getLocalStorage() {
  let todo;
  if (localStorage.getItem("todos") === null) {
    todo = [];
  } else {
    todo = JSON.parse(localStorage.getItem("todos"));
  }
  return todo;
}

function displayLocalStorage() {
  const todos = getLocalStorage();
  todos.forEach((todo) => {
    createList(todo);
  });
}

function setLocalStorage(todo) {
  let todos = getLocalStorage();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteLocalStorage(text) {
  let thingsToDo = getLocalStorage();
  thingsToDo.forEach((todo, index) => {
    if (todo === text) {
      thingsToDo.splice(index, 1);
    }
  });
  localStorage.setItem("thingsToDo", JSON.stringify(thingsToDo));
}



// Event Listeners
buttonDom.addEventListener("click", addElement);
document.addEventListener("DomContentLoaded", displayLocalStorage());


// Clear Local Storage
localStorage.clear();
