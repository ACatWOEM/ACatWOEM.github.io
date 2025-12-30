console.log('script.js loaded');
const audio = document.getElementById('audio');
const muteButton = document.getElementById('muteButton');
const muteStatus = document.getElementById('muteStatus');
const muted = './images/muted.png';
const unmuted = './images/unmuted.png';
var rickButton = document.getElementById('rickroll');
var rickImage = document.getElementById('rickImage')
const video = document.getElementById('code');
let isMuted = true;
let rolled = false;
let trollCount = 0;

function toggleMuteAudio(){
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
function rickroll(){
    if(trollCount == 0){
        video.src = './video/nggyu.mp4';
        video.play;
        rolled = true;
        rickButton.innerText = 'Mute?';
    } if(trollCount == 1){
        rickButton.innerText = 'NEVER';
        rickImage = './images/umad.png';
    } if(trollCount == 2){
        rickButton.innerText = 'GONNA';
    }if(trollCount == 3){
        rickButton.innerText = 'GIVE';
    }if(trollCount == 4){
        rickButton.innerText = 'YOU';
    }if(trollCount == 5){
        rickButton.innerText = 'UP';
    }if(trollCount == 6){
        rickButton.innerText = 'Okay...';
        video.src = './video/67.mp4';
        video.play;
    }if(trollCount == 7){
        rickButton.innerText = 'I\'M KIDDING!!!';
        video.src = './video/nggyu.mp4';
    }if(trollCount == 8){
        rickButton.innerText = 'fine...';
    }if(trollCount ==9){
        rickButton.innerText = 'muted';
        video.muted = !video.muted;
    }if (trollCount >= 10){
        video.muted = !video.muted;
        if(rickButton.innerText == 'muted'){
            rickButton.innerText = 'mute';
        }else{
            rickButton.innerText='muted';
        }
    }
    trollCount++;
}
muteButton.addEventListener('click', changeStatus);