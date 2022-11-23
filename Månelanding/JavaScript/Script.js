const romferge = document.getElementById("Romferge");

let timer = setTimeout(PlayAnimation, 5000);
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
