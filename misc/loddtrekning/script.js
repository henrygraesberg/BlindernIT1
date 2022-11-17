const cities = ["Oslo", "Geneve", "Paris", "London", "New York", "Tokyo", "Shanghai", "Moscow", "Istanbul"];

const winCity = document.getElementById("Win");
const time = document.getElementById("Time");

let randomCity = 3;

winCity.innerHTML = "Vinnerbyen er: " + cities[randomCity];

let timer = null;

let timeLeft = 10;

function StartRaffle() {
    if(timer != null) return;

    timer = window.setInterval(PickRandomCity, 1000);

    timeLeft = 10;

    time.innerHTML = "Tid: " + timeLeft;
}

function PickRandomCity() {
    timeLeft--;
    time.innerHTML = "Tid: " + timeLeft;

    randomCity = Math.floor(Math.random() * cities.length);

    winCity.innerHTML = "Vinnerbyen er: " + cities[randomCity];

    if(timeLeft <= 0) {
        window.clearInterval(timer);

        timer = null;

        randomCity = Math.floor(Math.random() * cities.length);

        winCity.innerHTML = "Vinnerbyen er: " + cities[randomCity];
    }
}