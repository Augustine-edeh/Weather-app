// || SELECTING ELEMENTS

const icon = document.querySelector(".weather");
const temp = document.querySelector(".temperature-value p");
const desc = document.querySelector(".temperature-description");
// const location = document.querySelector(".location p");
const notification = document.querySelector(".notification");
const searchElement = document.querySelector(".search");
const inputElement = document.querySelector("#search");

// inputElement.addEventListener("keydown", (e) => {
//   e.preventDefault;
//   console.log(inputElement.value);
// });

// || APP DATA
const weather = {};
weather.temperature = {
  unit: "celcius",
};

// || CONST & VARIABLES
const KELVIN = 273;

// || GET CURRENT POSITION FUNCTION
const getCurrentPosition = (event) => {
  // || API KEY
  const apiKey = "3ad3ba1e7be894670b88f65bf82f63d9";
  let latitude, longitude;
  navigator.geolocation.getCurrentPosition((position) => {
    const cityValue = inputElement.value;

    console.log(position);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    // console.log(latitude, longitude);
    // position.coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    // console.log({ lat: latitude, longi: longitude });

    // searchElement.addEventListener("click", () => {
    //   fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data.weather[0]);
    //       // console.log(data.weather);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // });

    searchElement.addEventListener("click", () => {
      const cityValue = inputElement.value;

      // const url_2 = `http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit&appid=${apiKey}`;
      const url_2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
      fetch(url_2)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          notification.style.backgroundColor = "yellow";

          // console.log(data.weather);
        })
        .catch((error) => {
          // notification.style.backgroundColor = "yellow";
          // window.alert(error);
          console.error(error);
        });
    });

    // console.log(position.coords);
    // || REMEMBER TO TRY USING OBJECT DESTRUCTURING FOR THE COORDINATES

    // ||TRY USING ASYNC FOR THE LATITUDE & LONGITUDE VARIABLES
  });
};

// || GETTING USER LIVE LOCATION
window.addEventListener("load", getCurrentPosition);

// console.log(latitude);

// const fetchWeather = () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       // console.log(data.weather);
//     });
// };
