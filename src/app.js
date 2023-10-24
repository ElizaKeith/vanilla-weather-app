function displayTemperature(response) {
let temperatureElement= document.querySelector("#temperature");
let cityElement= document.querySelector("#city");
let description= document.querySelector("#description");
let humidity= document.querySelector("#humidity");
let windElement= document.querySelector("#wind");
temperatureElement.innerHTML=Math.round(response.data.main.temp);
cityElement.innerHTML=response.data.name;
description.innerHTML=response.data.weather[0].description;
humidity.innerHTML=response.data.main.humidity;
windElement.innerHTML=Math.round(response.data.wind.speed);
}


let apiKey="ebef9ca4a8de66ed586fac628fade056";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);