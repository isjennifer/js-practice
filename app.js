//html element를 자바스크립트로 가져오기
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")


function onLoginSubmit (tomato) {
    //preventDefalut() 를 사용하여 기본적으로 submit할때 새로고침 되는 현상을 막음.
    tomato.preventDefault();
    console.log(loginInput.value);
}

//html의 Form 태그에서 submit 이벤트를 리슨함.
loginForm.addEventListener("submit", onLoginSubmit)