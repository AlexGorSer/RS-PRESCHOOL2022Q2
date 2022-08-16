'use strict';
import playList from "./playList";



const buttonPlay = document.querySelector('.play'),
      playListConteiner = document.querySelector('.play-list'),
      buttonPrev = document.querySelector('.play-prev'),
      buttonNext = document.querySelector('.play-next');

      
createPlayList();
const playerItem = document.querySelectorAll('.play-item');


let audioNum = 0;
let isPlay = false;
let time = 0;

const audio = new Audio();

function playerAudio(audioNum, time=0) {
  audio.src = playList[audioNum].src;
  audio.currentTime = time;
  audio.play();
}


function nextAudio() {
    if(!isPlay) {
        isPlay = true;
        buttonPlay.classList.add('pause');
    }
};

function prevAudio() {
    if(!isPlay) {
        isPlay = true;
        buttonPlay.classList.add('pause');
    }
};

function playAudio() {
    if(!isPlay) {
        isPlay = true;
        playerAudio(audioNum, time);
        buttonPlay.classList.add('pause');
    } else {
        isPlay = false;
        audio.pause();
        time = audio.currentTime;
        buttonPlay.classList.remove('pause');
    }
}

buttonPlay.addEventListener('click', ()=> {
    playerItem.forEach(e =>{
        e.classList.remove('item-active');
    })
    playerItem[audioNum].classList.add('item-active');
    playAudio();
});

buttonPrev.addEventListener('click', () => {
    audioNum--;
    if(audioNum < 0) {
        audioNum = playList.length-1;
    }
    playerItem.forEach(e =>{
        e.classList.remove('item-active');
    })
    playerItem[audioNum].classList.add('item-active');
    prevAudio();
    playerAudio(audioNum);
    
});


buttonNext.addEventListener('click', () => {
    audioNum++;
    if(audioNum > playList.length-1) {
        audioNum = 0;
    }
    playerItem.forEach(e =>{
        e.classList.remove('item-active');
    })
    playerItem[audioNum].classList.add('item-active');
    nextAudio();
    playerAudio(audioNum);
});


function createPlayList() {
    playList.forEach(e => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        playListConteiner.append(li);
        li.textContent = `${e.title}`;
    });
}

audio.addEventListener('ended', () =>{
    audioNum++;
    if(audioNum > playList.length-1) {
        audioNum = 0;
    }
    setTimeout(()=>{
        nextAudio();
        playerAudio(audioNum);
    }, 2000);

});


