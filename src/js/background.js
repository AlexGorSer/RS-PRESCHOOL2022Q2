'use strict';

const slideNext = document.querySelector('.slide-next'),
      slidePrev = document.querySelector('.slide-prev');

let slideIndex = getRandomNumber(1,20);


function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getBackground() {
    const img = new Image();
    let timesOfDay = getTime();
    let number = slideIndex;
    img.src = `https://raw.githubusercontent.com/AlexGorSer/stage1-tasks/assets/images/${timesOfDay}/${number.toString().padStart(2, 0)}.jpg`;
    img.onload = () => {
        document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/AlexGorSer/stage1-tasks/assets/images/${timesOfDay}/${number.toString().padStart(2, 0)}.jpg')`;
    }
    
}
 function getTime() {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 6 && hours <= 12) {
        return 'morning';
      } else if (hours > 12 && hours < 18) {
        return 'afternoon';
      }  else if (hours >= 18 && hours <= 23) {
        return 'evening';
      }  else if (hours >= 0 && hours <= 6) {
        return 'night';
      } else return console.log(hours);
     
}

getBackground();

slideNext.addEventListener('click', ()=>{
    slideIndex++;
    if(slideIndex > 20) {
        slideIndex = 1;
    }
    getBackground();
});

slidePrev.addEventListener('click', ()=>{
    slideIndex--;
    if(slideIndex < 1) {
        slideIndex = 20;
    }
    getBackground();
});

setInterval(getBackground, 1000)