var inputTodo = document.getElementById("inputTodo");
var addTodo = document.getElementById("addTodo");
var todoList = document.getElementById("todoList");

addTodo.addEventListener("click",function(){
    var todoVal = inputTodo.value;
    if (!todoVal) {
        return;
    }

    var newTodoDiv = document.createElement("div");
    newTodoDiv.setAttribute("class","todoDiv");

    var newTodo = document.createElement("input");
    newTodo.setAttribute("type","checkbox");
    newTodo.setAttribute("id",todoVal);
    newTodo.setAttribute("class","todoCheck");

    var newTodoLbl = document.createElement("label");
    newTodoLbl.setAttribute("for",todoVal);
    newTodoLbl.setAttribute("class","todoLabel");
    var newNode = document.createTextNode(todoVal)
    newTodoLbl.appendChild(newNode);

    var newDelTodo = document.createElement("button");
    newDelTodo.setAttribute("class","todoDelete");
    newDelTodo.appendChild(document.createTextNode("Delete"));

    newTodoDiv.appendChild(newTodo);
    newTodoDiv.appendChild(newTodoLbl);
    newTodoDiv.appendChild(newDelTodo);
    todoList.appendChild(newTodoDiv);

    inputTodo.value = "";

    newTodo.addEventListener("change",function(){
        if(this.checked){
            newTodoLbl.style.textDecoration = "line-through";
        }
        else{
            newTodoLbl.style.textDecoration = "none";
        }
    });

    newDelTodo.addEventListener("click",function(){
        todoList.removeChild(newTodoDiv);
    });
});