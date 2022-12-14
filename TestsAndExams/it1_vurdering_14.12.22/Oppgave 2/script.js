const inputField = document.querySelector("input");

const nameText = document.getElementById("Name");

const addButton = document.getElementById("AddName");

const pickButton = document.getElementById("PickName");

let nameArray = []

let nameChosen = false;

addButton.onclick = () => {
    if(nameArray.length >= 6 || nameChosen) return;

    const name = inputField.value;

    nameArray.push(name);

    let text = "";

    for(let i in nameArray) {
        text += "<br>" + nameArray[i];
    }

    nameText.innerHTML = text;
}

pickButton.onclick = () => {
    if(nameArray.length < 6 || nameChosen) return;
    
    const randInt = Math.floor(Math.random() * nameArray.length);

    const chosenName = nameArray[randInt];

    nameArray.splice(randInt, 1);

    let text = "";

    for(let i in nameArray) {
        text += "<br>" + nameArray[i];
    }
    nameText.innerHTML = text;

    document.getElementById("Tillitselev").innerHTML = "Tillitselev: " + chosenName;

    nameChosen = true;
}