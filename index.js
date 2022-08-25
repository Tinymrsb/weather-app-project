//time and date
let now = new Date();
let date = now.getDate();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

let newDate = document.querySelector("#dateToday");
newDate.innerHTML = `<strong>${day}</strong><br /> ${month} ${date}, ${year} ${hour}:${minutes}`;
//end time and date

//forecast
//forecast

//weather display
function displayWeather(response) {
  let locationTemp = document.querySelector("#locationTemp");
  let temperature = Math.round(response.data.main.temp);
  let city1 = response.data.name;
  let description = document.querySelector("#description");



  description.innerHTML = response.data.weather[0].description;
  locationTemp.innerHTML = `${city1} ${temperature}°`;
  
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


