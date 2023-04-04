//Get all elements
const form = document.querySelector("#todo-form");
const todoInput =  document.querySelector("#todo");
const todoListUl = document.querySelector(".list-group");
const firstCardBoydy = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeres();

function eventListeners(){
   form.addEventListener("submit",addTodo);
   document.addEventListener("DOMContentLoaded",loadStorageDateToUI);
   secondCardBody.addEventListener("click",removeTodoData);
   filter.addEventListener("keydown",filterTodos);
   clearButton.addEventListener("click" , celarAllTodoItems);


}
function celarAllTodoItems(e){
    if(confirm("Bütün verilənlər silinsin ?")){
        while(todoListUl.firstElementChild===null){
            todoListUl.removeChild(todoListUl.firstElementChild);
            localStorage.removeItem("todos");
        }
    }
}

function filterTodos(e){
    const filterValue =  e.target.value.toLowerCase();
    const allItems =  document.querySelectorAll(".list-group-item");
    allItems.forEach(function(eachEelement){
        const searchText = eachEelement.textContent.toLowerCase();
        if(searchText.indexOf(filterValue)===-1){
            allItems.setAttribute("style","display:none ! important");
            alert(`${searchText} - verləni tapılmadı`);
        }
        else{
            allItems.setAttribute("style","display:block ! important");
        }
    })
}
function removeTodoData(e){
    if(e.target.className==="fa fa-remove"){
        
        e.target.parentElement.parentElement.remove();
        let removedData = e.target.parentElement.parentElement.textContent;
        deleteToDoFromStorage(removedData);
        showAlert("warning",`${removedData}  - veriləni uğurla silindi`);
    }
}

function deleteToDoFromStorage(deletedTodo){
    let allTodo = getTodosFromStorage();
    allTodo.forEach(function(todo,index) { //burdada bize lazim olan datanin orda olub olmadiginin yoxlanisini edir
        if(deletedTodo===todo){
            allTodo.splice(index,1);//uygun index nomresine gore 1 element silinecek
        }
    });

    localStorage.setItem("todos",JSON.stringify(allTodo));
}

function loadStorageDateToUI(){
    let todos = getTodosFromStorage();
    todos.forEach(element=>{
        addTodoToUI(element);
    });
    /*
    Old version
      todos.forEach(function(element){
        addTodoToUI(element);
    });
    */
}

function addTodo(e){
    e.preventDefault();
    const newTodo =  todoInput.value.trim();
    if(newTodo===""){
        showAlert("danger","Boş verilən daxil edə bilməzsiz !!!");
    }
    else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success",`${newTodo} - veriləni uğurla əlavə olundu :)`);
       
    }

    e.preventDefault();
 
}


//Get Todos
function getTodosFromStorage(){
    let todos;
    //Todos deyerinde bir element qeyd edirem ki bu menim key deyerimdir.
    /*Key deyerini yoxlayir bele bir deyer yoxdursa todos key deyerine uygun massiv yaradir. Varsa onu JSON.Parse vastisesi ile
    massiv sekilde teqdim edir.*/
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos =JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}

// Add storage
function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
   
}

//Alert function
function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent=message;
    firstCardBoydy.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 10000);
}

function addTodoToUI(newTodo){
    
        const listItem =  document.createElement("li");
        listItem.className="list-group-item d-flex justify-content-between";
        const link = document.createElement("a");
        link.href="#";
        link.className="delete-item";
        link.innerHTML="<i class ='fa fa-remove'></i>";
        
        listItem.appendChild(document.createTextNode(newTodo));
        listItem.appendChild(link);
        todoListUl.appendChild(listItem);
        todoInput.value="";
}