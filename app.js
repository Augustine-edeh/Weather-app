// || SELECTING ELEMENTS

const icon = document.querySelector(".weather");
const temp = document.querySelector(".temperature-value p");
const desc = document.querySelector(".temperature-description");
// const location = document.querySelector(".location p");
const notification = document.querySelector(".notification");

// || APP DATA
const weather = {};
weather.temperature = {
  unit: "celcius",
};

// || CONST & VARIABLES
const KELVIN = 273;

// || API KEY
const apiKey = "3ad3ba1e7be894670b88f65bf82f63d9";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=51.5072&lon=0.1276&appid=${apiKey}&units=metric`;

const searchElement = document.querySelector(".search");
const fetchWeather = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.weather);
    });
};

searchElement.addEventListener("click", fetchWeather);
window.onload = (event) => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    // doSomething(position.coords.latitude, position.coords.longitude);
  });
};
