const oxButton = document.getElementById("oxygen");
const niButton = document.getElementById("nitrogen");
const caButton = document.getElementById("carbon");

const inputField = document.querySelector("input");
const inputForm = document.querySelector("form");

const h1Span = document.querySelector("span");

let chosenAtom = "";

class Molecule {
    /**
     * A class a molecule consisting of an atom of oxygen, nitrogen or carbon
     * 
     * @param {String} type A string that can be either "O", "N" or "C" which is the of the atom
     * @param {Number} n    The amount of atoms defined by the "type" variable
     */
    constructor(type, n) {
        this.type = type;
        this.n = n;
    }

    getHydrogen() {
        if(this.type == "O") {
            return 2;
        }
        if(this.type == "N") {
            return this.n + 2;
        }
        if(this.type == "C") {
            return 2*this.n + 2;
        }
    }
}

oxButton.onclick = () => {
    chosenAtom = "O";
}
niButton.onclick = () => {
    chosenAtom = "N";
}
caButton.onclick = () => {
    chosenAtom = "C";
}

inputForm.onsubmit = () => {
    event.preventDefault();

    const amount = Number(inputField.value);

    if(amount <= 0 || amount > 50 || Number.isInteger(amount)) {
        alert("Antall atomer må være et heltall større enn 0 og mindre enn eller lik 50");
        return;
    }
    if(chosenAtom == "") {
        alert("Må velge et stoff");
        return;
    }

    const atom = new Molecule(chosenAtom, amount);

    h1Span.innerHTML = `${chosenAtom}${(amount == 1 ? "" : amount)}H${atom.getHydrogen()}`;
}