// || SELECTING ELEMENTS

const icon = document.querySelector(".weather");
const temp = document.querySelector(".temperature-value p");
const desc = document.querySelector(".temperature-description");
const location = document.querySelector(".location p");
const notification = document.querySelector(".notification");

// || APP DATA
const weather = {};
weather.temperature = {
  unit: "celcius",
};

// || CONST & VARIABLES
const KELVIN = 273;

// || API KEY
const key = "";
