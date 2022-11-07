const romferge = document.getElementById("Romferge");

const buttons = {
    start: document.getElementById("Start"),
    stopp: document.getElementById("Stopp")
}

buttons.start.addEventListener("click", PlayAnimation);
buttons.stopp.addEventListener("click", PauseAnimation);

function PlayAnimation() {
    romferge.style.animationPlayState = 'running';
}

function PauseAnimation() {
    romferge.style.animationPlayState = 'paused';
}