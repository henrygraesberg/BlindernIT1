const form = document.querySelector("form");
const num1El = document.getElementById("tall1");
const num2El = document.getElementById("tall2");
const num3El = document.getElementById("tall3");

const winnersEl = document.getElementById("winners");
const prizeEl = document.getElementById("premie");

let winnings = 0;

form.onsubmit = e => {
    e.preventDefault();

    const num1 = num1El.value;
    const num2 = num2El.value;
    const num3 = num3El.value;

    if(num1 == num2 || num1 == num3 || num2 == num3) {
        alert("Du må skrive inn forskjellige tall");

        return;
    }
    if(num1 < 1 || num1 > 15 || num2 < 1 || num2 > 15 || num3 < 1 || num3 > 15) {
        alert("Tallene må være fra og med 1 til og med 15");

        return;
    }

    let array15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let winners = [];

    for(let i = 0; i < 3; i++) {
        const winningNum = Math.floor(Math.random() * array15.length);
        winners = [...winners, array15[winningNum]];

        array15.splice(winningNum, 1);
    }

    winnersEl.innerHTML = winners;

    let matchingNumbers = 0;

    for(i = 0; i < winners.length; i++) {
        if(num1 == winners[i]) matchingNumbers++;
    }
    for(i = 0; i < winners.length; i++) {
        if(num2 == winners[i]) matchingNumbers++;
    }
    for(i = 0; i < winners.length; i++) {
        if(num3 == winners[i]) matchingNumbers++;
    }


    if(matchingNumbers == 1) winnings += 1;
    else if(matchingNumbers == 2) winnings += 1000;
    else if(matchingNumbers == 3) winnings += 1000000;
    else winnings -= 1000;

    prizeEl.innerHTML = winnings;
}