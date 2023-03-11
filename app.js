//html element를 자바스크립트로 가져오기
const loginForm = document.querySelector("#login-form")


function onLoginSubmit (tomato) {
    tomato.preventDefault();
    console.log(tomato);
}


loginForm.addEventListener("submit", onLoginSubmit)