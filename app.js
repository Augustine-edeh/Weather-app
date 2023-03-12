// || SELECTING ELEMENTS

const icon = document.querySelector(".weather");
const temp = document.querySelector(".temperature-value p");
const desc = document.querySelector(".temperature-description");
// const location = document.querySelector(".location p");
const notification = document.querySelector(".notification");
const searchElement = document.querySelector(".search");
const inputElement = document.querySelector("#search");
const cityElement = document.querySelector("city-value");

// || APP DATA
const weather = {};
weather.temperature = {
  unit: "celcius",
};

// || CONST & VARIABLES
const KELVIN = 273;

// || GET-CURRENT-POSITION ERROR HANDLER FUNCTION
const errorHandler = (error) => {
  alert(
    "There was an error processing your Geolocation.\n\n Check your internet connection and try again."
  );
};

// // || GET CURRENT POSITION FUNCTION
// const getCurrentPosition = (event) => {
//   // || API KEY
//   const apiKey = "3ad3ba1e7be894670b88f65bf82f63d9";
//   let latitude, longitude;
//   navigator.geolocation.getCurrentPosition((position) => {
//     const cityValue = inputElement.value;

//     console.log(position);
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

//     searchElement.addEventListener("click", () => {
//       const cityValue = inputElement.value;

//       const url_2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
//       fetch(url_2)
//         .then((response) => response.json())
//         .then((data) => {
//           notification.style.backgroundColor = "orange";
//           console.log(data);
//           console.log(data.sys.country);
//           console.log(data.sys.id);
//           console.log(data.name);
//           fetch(`https://restcountries.com/v3.1/alpha/${data.sys.country}`)
//             .then((response) => response.json())
//             .then((responseData) => {
//               const country = responseData[0].name["common"];
//               document.querySelector(
//                 ".city-value"
//               ).textContent = `${data.name} ${country}`;
//             });
//         })
//         .catch((error) => {
//           notification.style.backgroundColor = "yellow";
//           alert("Yes!");
//           console.error(`There was an error ${error}`);
//         });
//     });
//   }, errorHandler);
// };
// // || GETTING USER LIVE LOCATION
// window.addEventListener("load", getCurrentPosition);

//  START HERE!
// || API KEY
const apiKey = "3ad3ba1e7be894670b88f65bf82f63d9";
// || CITY NAME
const cityName = "Moscow";
// || SECOND URL
const url_2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

//
// const getPermission = () => {
//   return new Promise((resolve) => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const { latitude, longitude } = position.coords;
//       console.log("Permission Success!!!");
//       return { latitude, longitude };
//     }, onGetCurrentPositionError);
//   });
// };

const getWeather = () => {
  try {
    fetch(url_2)
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);
        console.log(data.name);
        // console.log(data.name);
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

// window.onload = getCurrentPosition();
// window.addEventListener("load", getPermission);

// ||CALLING THE GET-CURRENT-POSITION FUNCTION
// window.addEventListener("load", getCurrentPosition);
