const filterInput = document.getElementById("text-filter");
const headText = document.querySelector("#h2-text");
headText.textContent="Fatimə"
filterInput.addEventListener("keyup",writing);
function writing(e){
    
    if(headText.textContent==""){
        headText.textContent="Fatimə"
    }
    else{
        headText.textContent=e.target.value;
    }
}

filterInput.addEventListener("paste",paste);

function paste(e){
    headText.textContent="ugurla paste olundu";
}


// filterInput.placeholder="Yaz.."
// const submitButton = document.getElementById("submit-button");




// function submitFunc(e){
//     console.log("Submit working....");
    
// }
//  filterInput.onfocus = function(e)
//  {
//  console.log("Working....");
//  console.warn(e.type);
//  console.info(e.target);
//  console.error(e.target.Classname);
//  }

// filterInput.addEventListener("focus",function(e){
// console.log("Working....");
// console.warn(e.target);
// console.error(e.target.className);
// console.info(e.target.placeholder);

// });

// document.addEventListener("keydown",start);
// function start(e){
//     // console.log(e.which);
//     console.warn(e.key);
// }