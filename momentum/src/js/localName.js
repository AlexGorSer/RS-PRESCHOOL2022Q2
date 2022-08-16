'use strict';

const inputCity = document.querySelector('.city'),
      inputName = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('inputName', inputName.value);
    localStorage.setItem('inputCity', inputCity.value);
  };
  
  function getLocalStorage() {
    if(localStorage.getItem('inputName')) {
      inputName.value = localStorage.getItem('inputName');
    };
    if(localStorage.getItem('inputCity')) {
      inputCity.value = localStorage.getItem('inputCity');
    }
  };
  
  export function addEvent(){
    window.addEventListener('beforeunload', setLocalStorage);
    window.addEventListener('load', getLocalStorage);
  };

//   console.log(inputName.placeholder = 'gtlhj')