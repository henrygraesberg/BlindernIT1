let elever = ["Per", "Pål", "David", "Dina", "Dora", "Dennis", "Edvard", "Eva"];

const eleverText = document.getElementById("elever");
eleverText.innerHTML = elever.join(", ");

const smallBox = document.getElementById("SmallBox");

let direction = "left";

let smallBoxPosition = 180;

let interval = null;

smallBox.onclick = () => {
    if(interval != null) return;

    interval = setInterval(moveBox, 5)
}

const moveBox = () => {
    if(direction == "right") {
        smallBoxPosition += 1;
    }
    else {
        smallBoxPosition -= 1;
    }

    smallBox.style.left = smallBoxPosition + "px";

    direction = checkPosition(direction);

    if(elever.length == 1) {
        clearInterval(interval);
    
        document.getElementById("pretext").innerHTML = 'Ordenselev:';
    }
}

const checkPosition = currentDirection => {
    if(smallBoxPosition >= 360) {
        removeRandom();
        
        return "left";
    }
    else if(smallBoxPosition <= 0) {
        removeRandom();
        
        return "right";
    }
    else return currentDirection;
}

const removeRandom = () => {
    const randInt = Math.floor(Math.random() * elever.length);

    elever.splice(randInt, 1);

    eleverText.innerHTML = elever.join(", ");
}