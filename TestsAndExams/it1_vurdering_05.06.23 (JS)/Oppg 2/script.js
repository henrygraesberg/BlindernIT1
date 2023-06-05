const inputField = document.querySelector("input");
const inntastet = document.getElementById("inntastet");
const tilfeldige = document.getElementById("tilfeldige");
const antallInntastet = document.getElementById("antall-inntastet");
const outputEl = document.getElementById("output");

let tallene = [/*1*/,/*2*/,/*3*/,/*4*/,/*5*/,/*6*/,/*7*/,/*8*/,/*9*/,/*10*/];

inntastet.onclick = () => {
    const inputnum = Number(inputField.value);

    for(i = 0; i < tallene.length; i++) {
        tallene[i] = inputnum;
    };

    outputEl.innerHTML = tallene;
}

tilfeldige.onclick = () => {
    for(i = 0; i < tallene.length; i++) {
        tallene[i] = Math.ceil(Math.random() * 10);
    };

    outputEl.innerHTML = tallene;
}

antallInntastet.onclick = () => {
    let antall = 0;
    const inputnum = Number(inputField.value);

    for(i = 0; i < tallene.length; i++) {
        if(tallene[i] == inputnum) antall++;
    }

    alert(`Fant ${antall} stykk(er)!`);
}