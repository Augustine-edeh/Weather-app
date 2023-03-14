// || SELECTING ELEMENTS
const icon = document.querySelector(".weather-icon img");
// const temp = document.querySelector(".temperature-value p");
const weatherDescription = document.querySelector(".temperature-description");
// const location = document.querySelector(".location p");
const notification = document.querySelector(".notification");
const searchElement = document.querySelector(".search");
const cityRef = document.querySelector("#search");
const cityElement = document.querySelector(".city-value");

// || GET-CURRENT-POSITION ERROR HANDLER FUNCTION
const errorHandler = (error) => {
  alert(
    "There was an error processing your Geolocation.\n\n Check your internet connection and try again."
  );
};
// || CITY NAME
const cityName = "Moscow";

const getWeather = () => {
  try {
    fetch(url_2)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.name);
      });
    cityElement.innerHTML = data.name;
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
};
// Error handler
const onGetCurrentPositionError = (err) => {
  console.log(`Ooops... Sorry we couldn't get your current location`);
};

searchElement.addEventListener("click", getWeather);

const getCurrentWeather = () => {
  let cityValue = cityRef.value;
  let locationCity, country, fullLocation;

  // || If input field is empty
  if (cityValue.length === 0) {
    notification.innerText = "Please enter a city name";
  } else {
    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
    let temperatureValue = document.querySelector(".temp_value");

    fetch(weatherURL)
      .then((response) => response.json())
      // || If city name is valid
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        // || showing Icon
        icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        // || Displaying temperature
        temperatureValue.innerHTML = data.main.temp.toFixed(1);
        //  || Displaying the Weather-Description
        weatherDescription.innerText = data.weather[0].description;
        fetch(`https://restcountries.com/v3.1/alpha/${data.sys.country}`)
          .then((response) => response.json())
          .then(async (countryData) => {
            country = countryData[0].name.common;
            locationCity = await data.name;
            fullLocation = `${locationCity}, ${country}`;
            cityElement.innerText = fullLocation;
          })
          .catch((error) => console.log(error));
      })
      .catch();
  }
};
window.addEventListener("load", getCurrentWeather);
