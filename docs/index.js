const audio = document.getElementById('audio');
const muteButton = document.getElementById('muteButton');
const muteStatus = document.getElementById('muteStatus');
const muted = './images/muted.png';
const unmuted = './images/unmuted.png';
let isMuted = true;

function toggleMute(){
    audio.muted = !audio.muted;
}
function changeStatus(){
    if(isMuted){
        muteStatus.src = unmuted;
        muteStatus.alt = unmuted;
    } else{
        muteStatus.src = muted;
        muteStatus.alt = muted;
    }
    isMuted = !isMuted;
}

muteButton.addEventListener('click', changeStatus);