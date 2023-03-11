//html element를 자바스크립트로 가져오기
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit (event) {
    //preventDefalut() 를 사용하여 기본적으로 submit할때 새로고침 되는 현상을 막음.
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //localStorage.setItem 을 사용하여 key: username, value: 사용자가 입력한 값 으로 저장시킴
    localStorage.setItem("username", username)
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//html의 Form 태그에서 submit 이벤트를 리슨함.
loginForm.addEventListener("submit", onLoginSubmit)