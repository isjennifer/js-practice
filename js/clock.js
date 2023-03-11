const clock = document.querySelector("#clock")

function getClock() {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

setInterval(getClock, 1000)

// console에 1초마다 시:분:초 가 출력됨 = 시계 만듬!