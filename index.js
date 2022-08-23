function formatDate(timestamp) {
  //calculate time and date
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
  let day = days[date.getDate()];
  return `${day} ${hours}:${minutes}`;
}

function displayWeather(response) {
  let locationTemp = document.querySelector("#locationTemp");
  let temperature = Math.round(response.data.main.temp);
  let city1 = response.data.name;
  let dateElement = document.querySelector("#date");
  locationTemp.innerHTML = `${city1} ${temperature}°`;
  dateElement.innerHTML = formatDate(response.date.dt * 1000);
}

let city = "Nashville";
let key = "dc0706dfd0afd6a4fbfc21adb5196f26";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

axios.get(url).then(displayWeather);
//location
function currentPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(currentPosition);

// search engine
function search(city) {
  let apiKey = "dc0706dfd0afd6a4fbfc21adb5196f26";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Nashville");
