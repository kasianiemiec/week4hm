let now = new Date();
let h4 = document.querySelector("h4");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

h4.innerHTML = `${day} ${hours}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
}
let changeButton = document.querySelector("#search-city");
changeButton.addEventListener("submit", searchCity);
