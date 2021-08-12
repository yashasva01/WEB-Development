let addTaskBtn = document.getElementById("add-task-button");
let inputTask = document.querySelector("#input-task");
let deleteBtn = document.querySelectorAll('.delete-btn');
let checkbox = document.querySelectorAll("input[type=checkbox]");

addTaskBtn.addEventListener("click",function () {

    let parent = document.getElementById('task-list');
    let input = document.createElement("input");
    input.type = "checkbox";
    input.name = inputTask.value;
    let span = document.createElement("span");
    span.className = 'task';
    let btn = document.createElement("button");
    btn.innerHTML =  "+";
    btn.className = "delete-btn";
    btn.addEventListener('click',function () {
        parent.removeChild(li);
    })
    let li = document.createElement("li");

    span.textContent = inputTask.value;

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(btn);
    parent.appendChild(li);
})

inputTask.addEventListener('click',function () {
    inputTask.value = '';
})

