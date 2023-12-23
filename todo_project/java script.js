const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todolist = document.querySelector(".todo-list");

button.addEventListener("click", addTodo);
todolist.addEventListener("click", deleteTodo);

function addTodo(event) {
  event.preventDefault(); //to prevent submission to server

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-container");

  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");
  todoItem.innerText = input.value;
  todoDiv.appendChild(todoItem);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash fa-beat-fade"></i>';
  todoDiv.appendChild(deleteButton);

  const comp = document.createElement("button");
  comp.classList.add("complete-btn");
  comp.innerHTML = '<i class="fa-solid fa-check fa-beat"></i>';
  todoDiv.appendChild(comp);

  todolist.appendChild(todoDiv);
  todoItem.innerText = input.value;
  input.value = "";
}

function deleteTodo(event) {
  const item = event.target;
  if (item.classList[0] === "delete-btn") {
    const del = item.parentElement;
    del.remove();
    alert("delted");
  }

  if (item.classList[0] === "complete-btn") {
    const com = item.parentElement;
    com.classList.toggle("completed");
  }
}
