const kast1El = document.getElementById("kast-1");
const kast2El = document.getElementById("kast-2");
const sumEl = document.getElementById("sum");
const delsumEl = document.getElementById("delsum");
const forsøkEl = document.getElementById("antall-forsøk");
const hiScoreEl = document.getElementById("hi-score");

const kastButton = document.getElementById("kast-terning");
const delsumButton = document.getElementById("til-delsum");
const restartButton = document.getElementById("restart");

let timesRolled = 0;
let timesAdded = 0;

let sum = 0;
let delsum = 0;
let hiScore = 0;

let addedAlready = true;

kastButton.onclick = () => {
    if(timesRolled >= 5) return;

    const kast1 = Math.floor(Math.random() * 6) + 1;
    const kast2 = Math.floor(Math.random() * 6) + 1;

    delsum = kast1 + kast2;

    delsumEl.innerHTML = delsum;

    kast1El.innerHTML = kast1;
    kast2El.innerHTML = kast2;

    addedAlready = false;

    timesRolled++;

    forsøkEl.innerHTML = timesRolled;
}

delsumButton.onclick = () => {
    if(timesAdded >= 3) return; if(addedAlready == true) return;

    sum += delsum;

    sumEl.innerHTML = sum;

    addedAlready = true;

    timesAdded++;

    if(sum > hiScore) {
        hiScore = sum;

        hiScoreEl.innerHTML = hiScore;
    }
}

restartButton.onclick = () => {
    timesRolled = 0;
    timesAdded = 0;

    sum = 0;
    delsum = 0;

    addedAlready = true;

    sumEl.innerHTML = "";
    delsumEl.innerHTML = "";
    kast1El.innerHTML = "";
    kast2El.innerHTML = "";
    forsøkEl.innerHTML = "";
}