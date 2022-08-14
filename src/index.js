import './css/owfont-regular.css';
import './css/style.css';
import {showTime} from './js/time.js';
import {addEvent} from './js/localName.js'

addEvent();
showTime();
// export let soundArr = new Audio('./assets/sounds/Aqua Caelestis.mp3');
// export function play(sound){
//     sound.play();
// }
// function getGreeting() {
//     const date = new Date();
//     const hours = date.getHours();
  
//     if (hours >= 6 && hours <= 12) {
//       return console.log('утро');
//     } else if (hours >= 12 && hours <= 18) {
//       return console.log('день');
//     }  else if (hours >= 18 && hours <= 23) {
//       return console.log('вечер');
//     }  else if (hours >= 6 && hours <= 12) {
//       return console.log('ночь');
//     };
//   }
  