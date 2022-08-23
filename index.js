function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
  let day = days[dayIndex];
}

function displayWeather(response) {
  let weatherDiv = document.querySelector("#todaysWeather");
  let temperature = Math.round(response.data.main.temp);
  let city1 = response.data.name;
  let location = document.querySelector("#location");
  location.innerHTML = city1;

  weatherDiv.innerHTML = `It is currently ${temperature} degrees.`;
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

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);
