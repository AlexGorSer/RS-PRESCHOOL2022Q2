
const weatherIcon = document.querySelector('.weather-icon '),
      weatherDes = document.querySelector('.weather-description'),
      inputCity = document.querySelector('.city'),
      weatherError = document.querySelector('.weather-error'),
      weatherWind = document.querySelector('.wind'),
      weatherHumidity = document.querySelector('.humidity'),
      temperature = document.querySelector('.temperature');


export async function getWeather(city = 'минск') { 
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=3c07dea17695cc084762c6a6217e9dc0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherError.textContent = '';
    weatherHumidity.textContent = `${Math.ceil(data.main.humidity)}%`;
    weatherWind.textContent = `${Math.ceil(data.wind.speed)}м/с`
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.ceil(data.main.temp)}°C`;
    weatherDes.textContent = data.weather[0].description
          .replace(/(^|\s)\S/g, (a) => a.toUpperCase());
          
  } catch {
    weatherError.textContent = 'Неправельное набран город. При пустой строке произойдет автозаполнение на город "Минск".';
  }

  };

function getNone() {
  if(inputCity.value == '') {
    inputCity.value = 'Минск';
  }
};

setInterval(getNone, 5000);

// setInterval(()=> {getWeather(inputCity.value);}, 100000);

  // getWeather(localStorage.getItem('inputCity'));

  inputCity.addEventListener('change', () => {
    getWeather(inputCity.value);
  });