const ord = ["h", "e", "m", "m", "e", "l", "i", "g"];
const hidden = [];
const inputField = document.querySelector("input");
const button = document.querySelector("button");
const wordEl = document.getElementById("word");
const outputEl = document.getElementById("Output");
function CheckLetter(array, wantedLetter) {
    let positions = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == wantedLetter) {
            positions = [...positions, i];
        }
        ;
    }
    if (positions.length != 0) {
        return positions;
    }
    return "not found";
}
function CreateHidden(word) {
    let hiddenArray = [];
    for (let i in word) {
        hiddenArray = [...hiddenArray, "_"];
    }
    return hiddenArray;
}
button.onclick = () => {
    const letter = inputField.value.toLowerCase();
    const exists = CheckLetter(ord, letter);
    if (exists == "not found") {
        outputEl.innerHTML = "Bokstaven er ikke i ordet";
    }
    else {
        outputEl.innerHTML = `bokstaven er i ordet på ${exists.length} ${exists.length == 1 ? "sted" : "steder"}`;
        for (let i = 0; i < exists.length; i++) {
            hiddenWord[i] = letter;
            wordEl.innerHTML = hiddenWord.toString();
        }
    }
};
const hiddenWord = CreateHidden(ord);
wordEl.innerHTML = hiddenWord.toString();
console.log(`index of "l" is ${CheckLetter(ord, "l")}`);
console.log(`index of "e" is ${CheckLetter(ord, "e")}`);
console.log(`index of "m" is ${CheckLetter(ord, "m")}`);
console.log(`index of "ø" is ${CheckLetter(ord, "ø")}`);
console.log(`\nhidden word is ${CreateHidden(ord)}`);
