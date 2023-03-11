const htmlClock = document.querySelector("#clock")

function clock() {
    const date = new Date();
    htmlClock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

// clock()을 한번 먼저 실행해주면 처음에 html에서 설정해준 기본값인 00:00 이 나오지 않고 바로 시:분:초 가 나옴
clock();
setInterval(clock, 1000);

// console에 1초마다 시:분:초 가 출력됨 = 시계 만듬!