let names = ["Per", "Pål", "David", "Dina", "Dora", "Dennis", "Edvard", "Eva"];

const namesText = document.getElementById("Names");

namesText.innerHTML = names;

const smallBox = document.getElementById("SmallBox");

let direction = "left";

let smallBoxPosition = 180;

let interval = null;

smallBox.onclick = () => {
    if(interval != null) return;

    interval = setInterval(MoveBox, 5)
}

const MoveBox = () => {
    if(direction == "right") {
        smallBoxPosition += 1;
    }
    else {
        smallBoxPosition -= 1;
    }

    smallBox.style.left = smallBoxPosition + "px";

    direction = CheckPosition(direction);

    if(names.length == 1) clearInterval(interval);
}

const CheckPosition = (currentDirection) => {
    if(smallBoxPosition >= 360) {
        RemoveRandom();
        
        return "left";
    }
    else if(smallBoxPosition <= 0) {
        RemoveRandom();
        
        return "right";
    }
    else return currentDirection;
}

const RemoveRandom = () => {
    const randInt = Math.floor(Math.random() * names.length);

    names.splice(randInt, 1);

    namesText.innerHTML = names;
}