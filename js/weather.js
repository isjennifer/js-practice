// user의 현재위치 알수있음

function onGeoSuccess(position) {
    const lat = position.coords.latitude
    const long = position.coords.longitude
    console.log("you live in", lat, long)
}

function onGeoError() {
    alert("I can't get your weather.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);