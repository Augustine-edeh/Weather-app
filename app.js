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

// || GET-CURRENT-POSITION ERROR HANDLER FUNCTION
const errorHandler = (error) => {
  alert(
    "There was an error processing your Geolocation.\n\n Check your internet connection and try again."
  );
};

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

      const url_2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
      fetch(url_2)
        .then((response) => response.json())
        .then((data) => {
          notification.style.backgroundColor = "orange";
          // if (data.hasOwnProperty("message")) {
          //   throw new Error();
          // }
          // try {
          console.log(data);
          console.log(data.sys.country);
          console.log(data.sys.id);
          console.log(data.name);
          fetch(`https://restcountries.com/v3.1/alpha/${data.sys.country}`)
            .then((response) => response.json())
            .then((responseData) => {
              // console.log(responseData[0].name["common"])
              const country = responseData[0].name["common"];
              document.querySelector(
                ".city-value"
              ).textContent = `${data.name} ${country}`;
            });

          // } catch (error) {
          // console.log("Errowpj: !!!!!" + error);
          // throw new Error();
          // }
        })
        .catch((error) => {
          notification.style.backgroundColor = "yellow";
          // window.alert(error);
          alert("Yes!");
          console.error(`There was an error ${error}`);
        });
    });

    // console.log(position.coords);
    // || REMEMBER TO TRY USING OBJECT DESTRUCTURING FOR THE COORDINATES

    // || TRY USING ASYNC FOR THE LATITUDE & LONGITUDE VARIABLES
  }, errorHandler);
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
