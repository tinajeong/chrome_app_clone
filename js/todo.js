const toDoform = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let todos = [];
const saveTodosStr = localStorage.getItem(TODOS_KEY);

function saveTodos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}
function deleteTodo(event) {
    const li = event.target.parentElement;
    console.log(todos);
    todos = todos.filter((todo)=> todo.id != parseInt(li.id)) ;
    console.log(todos);
    li.remove();
    saveTodos();    
}

function paintTodo(newTodo) {
    console.log(newTodo);  
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo.text;
    button.innerText = "x";
    li.id = newTodo.id;
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click",deleteTodo);
    toDoList.appendChild(li);   
}

function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const idStr = Date.now().toString();

    const newTodoObj = {
        id : idStr,
        text : newTodo,
    };
    // if(todos===null) todos =[]; 의문의 null 에러
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

toDoform.addEventListener("submit", handleTodoSubmit);

if(saveTodos !== null) {
    const parsedTodos = JSON.parse(saveTodosStr);
    todos = parsedTodos;
    if(parsedTodos!=null){
        parsedTodos.forEach(element => {
            paintTodo(element);
        });
    }
}