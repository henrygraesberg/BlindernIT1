const images = {
    grass: "../Images/Grass.jpg",
    mole: "../Images/ScalopusAquaticus.jpg"
};

let score = 0;

let time = 10;

let timeup = false;

const imageElements = document.querySelectorAll("img");

const timeLeftText = document.getElementById("TimeLeft");
const scoreText = document.getElementById("Points");

let gamePlaying = false;

let randomNum = Math.floor(Math.random() * 9);
imageElements[randomNum].src = images.mole;
imageElements[randomNum].addEventListener("click", Whack);

let moleInterval;
let countdown;

function Reset() {
    if(gamePlaying == true) return;

    for(let i = 0; i < imageElements.length; i++) {
        imageElements[i].src = images.grass;
        imageElements[i].removeEventListener("click", Whack);
    }

    let randomNum = Math.floor(Math.random() * 9);
    imageElements[randomNum].src = images.mole;
    imageElements[randomNum].addEventListener("click", Whack);

    time = 10;
    timeLeftText.innerHTML = time;

    score = 0;
    scoreText.innerHTML = score;
}

function Whack() {
    if(gamePlaying == false) {
        moleInterval = window.setInterval(MoveMole, 1000);
        gamePlaying = true;

        countdown = window.setInterval(Countdown, 1000);
    }

    score++;

    scoreText.innerHTML = score;

    MoveMole();
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