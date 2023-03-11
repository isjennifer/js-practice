//html element를 자바스크립트로 가져오기
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

//반복되는 string은 오타와 에러 방지를 위해 변수로 저장해서 사용하는게 좋음
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    //preventDefalut() 를 사용하여 기본적으로 submit할때 새로고침 되는 현상을 막음.
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //localStorage.setItem 을 사용하여 key: username, value: 사용자가 입력한 값 으로 저장시킴
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
}

function paintGreetings(username) {
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);
}