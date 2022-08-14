'use strict';

const inputName = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('inputName', inputName.value);
  };
  
  function getLocalStorage() {
    if(localStorage.getItem('inputName')) {
      inputName.value = localStorage.getItem('inputName');
    }
  };
  
  export function addEvent(){
    window.addEventListener('beforeunload', setLocalStorage);
    window.addEventListener('load', getLocalStorage);
  };

//   console.log(inputName.placeholder = 'gtlhj')