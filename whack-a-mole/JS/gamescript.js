const images = {
    grass: "../Images/Grass.jpg",
    mole: "../Images/ScalopusAquaticus.jpg"
};

let score = 0;

let time = 30;

let timeup = false;

const imageElements = document.querySelectorAll("img");

const timeLeftText = document.getElementById("TimeLeft");
const scoreText = document.getElementById("Points");

let gamePlaying = false;

let moleInterval;
let countdown;

MoveMole();

function Reset() {
    if(gamePlaying == true) return;

    MoveMole();

    time = 30;
    timeLeftText.innerHTML = time;

    score = 0;
    scoreText.innerHTML = score;
}

function Whack() {
    if(gamePlaying == false) {
        moleInterval = window.setInterval(MoveMole, 700);
        gamePlaying = true;

        countdown = window.setInterval(Countdown, 1000);
    }

    event.target.src = images.grass;
    event.target.removeEventListener("click", Whack);

    score++;

    scoreText.innerHTML = score;
}

function MoveMole() {
    for(let i = 0; i < imageElements.length; i++) {
        imageElements[i].src = images.grass;
        imageElements[i].removeEventListener("click", Whack);
    }

    let randomNum = Math.floor(Math.random() * 9);

    imageElements[randomNum].src = images.mole;

    imageElements[randomNum].addEventListener("click", Whack);
}

function Countdown() {
    time--;

    if(time <= 0) {
        timeup = false;

        window.clearInterval(countdown);

        window.clearInterval(moleInterval);

        for(let i = 0; i < imageElements.length; i++) {
            imageElements[i].src = images.grass;
            imageElements[i].removeEventListener("click", Whack);
        }

        gamePlaying = false;
    }

    timeLeftText.innerHTML = time;
}