const toDoForm = document.querySelector(".js_toDo_form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const utl = "userToDoList"
let toDoArr = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = toDoArr.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDoArr = cleanToDo;
    saveToDo();
}

function saveToDo() {
    localStorage.setItem(utl, JSON.stringify(toDoArr));
}

function writeToDo(text) {
    const li = document.createElement("li"),
        delBtn = document.createElement("button"),
        span = document.createElement("span"),
        newID = toDoArr.length + 1;

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newID;
    toDoList.appendChild(li);
    const toDoObj = {
        text, id: newID
    };
    toDoArr.push(toDoObj);
    saveToDo();
}

function loadToDo() {
    const userToDoList = localStorage.getItem(utl);

    if (userToDoList !== null) {
        const parsedToDo = JSON.parse(userToDoList);
        parsedToDo.forEach(element => {
            writeToDo(element.text);
        });
    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", event => {
        event.preventDefault();
        const userToDoInput = toDoInput.value;
        writeToDo(userToDoInput);
        toDoInput.value = "";
    });
}

init();
