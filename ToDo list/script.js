const text = document.getElementById("text");
const addtaskbtn = document.getElementById("add-task-btn");
const savetaskbtn = document.getElementById("save-todo-btn");
const listbox = document.getElementById("listbox");
const save = document.getElementById("saveindex");
displayTodo();

addtaskbtn.addEventListener("click",function (e) {
        e.preventDefault();
        let todo = localStorage.getItem("todo");
        if (todo === null) {
            todoArray = [];
        } else {
            todoArray = JSON.parse(todo);
        }
        todoArray.push(text.value);
        text.value = "";
        localStorage.setItem("todo", JSON.stringify(todoArray));
        displayTodo();
    });


function displayTodo() {
        let todo = localStorage.getItem("todo");
        if (todo === null) {
        todoArray = [];
        } else {
        todoArray = JSON.parse(todo);
        }
        let htmlCode = "";
        todoArray.forEach((list, ind) => {
        htmlCode += `<div class='flex mb-4 items-center'>
        <p class='w-full text-grey-darkest'>${list}</p>
        <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
        <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
        </div>`;
        });
        listbox.innerHTML = htmlCode;
 }

 function deleteTodo(ind) {
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    todoArray.splice(ind, 1);
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
    }

function edit(ind) {
        save.value = ind;
        let todo = localStorage.getItem("todo");
        todoArray = JSON.parse(todo);
        text.value = todoArray[ind];
        addTaskButton.style.display = "none";
        saveTaskButton.style.display = "block";
    }

savetaskbtn.addEventListener("click",() => {
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    let id = save.value;
    todoArray[id] = text.value;
    addTaskButton.style.display = "block";
    saveTaskButton.style.display = "none";
    text.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
});

