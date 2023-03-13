const imgs = [
    "0.jpg", "1.jpg", "2.jpg",
]

const choseImgs = imgs[Math.floor(Math.random() * imgs.length)]

// createElement 를 사용하여 javascript에서 새로운 html element 를 만들수 있다. () 안의 태그를 생성함.
const backImg = document.createElement("img");
backImg.src = `img/${choseImgs}`

// 위에서 만든 새로운 element(backImg)를 html body에 추가하기
document.body.appendChild(backImg);