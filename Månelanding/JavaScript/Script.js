const romferge = document.getElementById("Romferge");

let timer = setInterval(AutoLaunchAnimation, 5000);
let animationPlaying = false;

function AutoLaunchAnimation() {
    romferge.style.animationPlayState = 'running';

    animationPlaying = true;
}

function PlayAnimation() {
    romferge.style.animationPlayState = 'running';

    if(!animationPlaying) {
        clearInterval(timer);

        timer = null;
    }
}

function PauseAnimation() {
    romferge.style.animationPlayState = 'paused';
}