'use strict';

const quote = document.querySelector('.quote'),
      changeQuote = document.querySelector('.change-quote'),
      autor = document.querySelector('.author');


 export async function getQuotes() {  
    const quotes = './js/data.json';
    const res = await fetch(quotes);
    const data = await res.json();

     let num = getRandomNumber(0, data.length-1);
    quote.textContent = data[num].text;
    autor.textContent = data[num].author;

  }
  getQuotes();

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

setInterval(getQuotes, 10000);


changeQuote.addEventListener('click', getQuotes);