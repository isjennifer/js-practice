const htmlClock = document.querySelector("#clock")

function clock() {
    const date = new Date();
    // String(~) 또는 .toString() 으로 number->string으로 변경해야 padStart를 붙일수 있음 
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = date.getMinutes().toString().padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    htmlClock.innerText = `${hours}:${minutes}:${seconds}`
}

// clock()을 한번 먼저 실행해주면 처음에 html에서 설정해준 기본값인 00:00 이 나오지 않고 바로 시:분:초 가 나옴
clock();
setInterval(clock, 1000);

// console에 1초마다 시:분:초 가 출력됨 = 시계 만듬!