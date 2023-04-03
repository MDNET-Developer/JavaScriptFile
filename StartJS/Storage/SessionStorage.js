//Buttons
const add = document.getElementById("add");
const del = document.getAnimations("delete");
const clear = document.getAnimations("clear");

//TextBoxs
const addkey = document.getElementById("addkey");
const addvalue = document.getElementById("addvalue");
const deletekey = document.getElementById("deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("clik",clearItems);

function addItem(e){
    if(addkey.value!=" "&& addvalue.value!=" "){
        sessionStorage.setItem(addkey.value,addvalue.value);
        localStorage.setItem(addkey.value,addvalue.value);
    }
   
}

function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
    // localStorage.removeItem(deletekey.value);
}

function clearItems(e){
    sessionStorage.clear();
    localStorage.clear();
}