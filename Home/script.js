const inputBox = document.getElementById("input-box");
// add pro
const filterBox = document.getElementById("filter-box");
const priorityBox = document.getElementById("priority-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
       /*  li.innerHTML = inputBox.value; */

        /* add pro */
         li.textContent = inputBox.value;


        // add priority class  on dropdown
        const priority = priorityBox.value; // high,m,l
        li.classList.add(priority);
        listContainer.appendChild(li);

        /* delete icon */
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

/*  click function */

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function filterTasks() {
    let filter = filterBox.value;
    let tasks = listContainer.getElementsByTagName("li");

    for (let i = 0; i < tasks.length; i++) {
        if (filter === "all") {
            tasks[i].style.display = "block";
        } 
        else if (tasks[i].classList.contains(filter)) {
            tasks[i].style.display = "block";
        } 
        else {
            tasks[i].style.display = "none";
        }
    }
}
