const ord = Array.from("hemmelig")

const hidden: string[] = []

let usedWords: string[] = []; 

const inputField = document.querySelector("input");
const button = document.querySelector("button");

const wordEl = document.getElementById("Word");
const outputEl = document.getElementById("Output");
const usedWordsEl = document.getElementById("Used");

let livesLeft = 5;

function CheckLetter(array: string[], wantedLetter: string): string | number[] {
    let positions: number[] = [];
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] == wantedLetter) {
            positions = [...positions, i];
        };
    }
    
    if(positions.length != 0) {
        return positions;
    }
    return "not found";
}

function CreateHidden(word: string[]) {
    let hiddenArray: string[] = []

    for(let i in word) {
        hiddenArray = [...hiddenArray, "_"];
    }

    return hiddenArray;
}

function CheckLives(livesLeft: number) {
    if(livesLeft <= 0) {
        return false;
    }
    return true;
}

button.onclick = () => {
    const letter = inputField.value.toLowerCase();

    if(CheckLives(livesLeft) == false) return;

    if(letter == "") return;

    if(CheckLetter(usedWords, letter) != "not found") {
        inputField.value = "";

        outputEl.innerHTML = "Du har allerede gjettet denne bokstaven";

        return;
    }

    const exists = CheckLetter(ord, letter);

    if(exists == "not found") {
        outputEl.innerHTML = "Bokstaven er ikke i ordet";

        livesLeft--;
    }
    else {
        outputEl.innerHTML = `bokstaven er i ordet på ${exists.length} ${exists.length == 1 ? "sted" : "steder"}`

        for(let i of exists) {
            hiddenWord[i] = letter;

            wordEl.innerHTML = hiddenWord.toString();
        }
    }

    usedWords = [...usedWords, letter];

    usedWordsEl.innerHTML = usedWords.toString();

    inputField.value = "";
}

const hiddenWord = CreateHidden(ord); 

wordEl.innerHTML = hiddenWord.toString();