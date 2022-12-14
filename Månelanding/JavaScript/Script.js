const romferge = document.getElementById("Romferge");

let timer = setTimeout(PlayAnimation, 5000); 
//setTimeout takes a function and a number as arguments. The number is the time in milliseconds untill the function executes
let animationPlaying = false;

function PlayAnimation() {
    romferge.style.animationPlayState = 'running';

    if(!animationPlaying) {
        clearTimeout(timer);

        timer = null;
        
        animationPlaying = true;
    }
}

function PauseAnimation() {
    romferge.style.animationPlayState = 'paused';
}
