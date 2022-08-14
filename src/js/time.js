'use strict';

const momentumTime = document.querySelector('.time'),
      momentumGriitings = document.querySelector('.greeting'),
      momentumDate = document.querySelector('.date');

export function showTime() {
  const data = new Date(),
        optionsData = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'},
        currectTime = data.toLocaleTimeString(),
        currectDate = data.toLocaleDateString('ru-Ru', optionsData)
        .replace(/(^|\s)\S/g, (a) => a.toUpperCase());

  momentumDate.textContent = currectDate;
  momentumTime.textContent = currectTime;

  setTimeout(showTime,currectDate,getGreeting(), 1000);
}

function getGreeting() {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 6 && hours <= 12) {
    return momentumGriitings.textContent = 'Доброе утро,';
  } else if (hours > 12 && hours < 18) {
    return momentumGriitings.textContent = 'Добрый день,';
  }  else if (hours >= 18 && hours <= 23) {
    return momentumGriitings.textContent = 'Добрый вечер,';
  }  else if (hours >= 0 && hours <= 6) {
    return momentumGriitings.textContent = 'Доброй ночь,';
  } else return console.log(hours);
 
}
// showTime();


// inputName.value = '[Введите свое имя.]';

