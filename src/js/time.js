'use strict';

const momentumTime = document.querySelector('.time'),
      momentumDate = document.querySelector('.date');

export function showTime() {
  const data = new Date(),
        optionsData = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'},
        currectTime = data.toLocaleTimeString(),
        currectDate = data.toLocaleDateString('ru-Ru', optionsData)
        .replace(/(^|\s)\S/g, (a) => a.toUpperCase());

  momentumDate.textContent = currectDate;
  momentumTime.textContent = currectTime;

  setTimeout(showTime,currectDate, 1000);
}
 