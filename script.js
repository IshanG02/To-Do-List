const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("It can't be empty...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveInfo();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveInfo();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveInfo();
    }
},false);

function saveInfo(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function displayList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

displayList();
