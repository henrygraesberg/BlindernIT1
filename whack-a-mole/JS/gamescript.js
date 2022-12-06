const images = { grass: "../Images/Grass.jpg", mole: "../Images/ScalopusAquaticus.jpg" };

let score = 0;

let time = 30;

let timeup = false;

const imageElements = document.querySelectorAll("img");

const timeLeftText = document.getElementById("TimeLeft");
const scoreText = document.getElementById("Points");

let gamePlaying = false;

let moleInterval;
let countdown;



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
        moleInterval = setTimeout(MoveMole, 700);
        gamePlaying = true;

        countdown = setInterval(() => {
            time--;

            if(time <= 0) {
                timeup = false;
        
                clearInterval(countdown);
        
                clearTimeout(moleInterval);
        
                ClearBoard();
        
                gamePlaying = false;
            }
        
            timeLeftText.innerHTML = time;
        }, 1000);
    }

    event.target.src = images.grass;
    event.target.removeEventListener("click", Whack);

    score++;

    scoreText.innerHTML = score;
}

function ClearBoard() {
    for(let i = 0; i < imageElements.length; i++) {
        imageElements[i].src = images.grass;
        imageElements[i].removeEventListener("click", Whack);
    }
}

function MoveMole() {
    ClearBoard();
    
    const multiple = Math.floor(Math.random() * 8);

    let moles = 1;

    if(multiple >= 6) { moles = multiple - 4; };

    for(let i = 0; i < moles; i++) {
        const randomNum = Math.floor(Math.random() * imageElements.length);

        imageElements[randomNum].src = images.mole;

        imageElements[randomNum].addEventListener("click", Whack);
    }

    if(gamePlaying) {
        const randomTime = Math.floor(Math.random() * 300) + 700;

        moleInterval = setTimeout(MoveMole, randomTime);
    }
}

MoveMole();