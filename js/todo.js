const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

function deleteToDo(event) {
    // 어떤 버튼을 눌렀고, 어떤 버튼의 li를 삭제해야하는지 모름 
    // event.target.부모요소 로 찾아내서 버튼이 눌려진 li 특정
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo)
}

toDoForm.addEventListener("submit", handleToDoSubmit)