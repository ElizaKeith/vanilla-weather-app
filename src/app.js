function formatDate(timestamp){
let date=new Date(timestamp);
let hours=date.getHours();
if (hours < 10) {hours= `0${hours}`}
let minuets=date.getMinutes();
if (minuets < 10) {minuets= `0${minuets}`}
let days= ["Sunday", "Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"]
let day=days[date.getDay()];
return `${day} ${hours}:${minuets}`}



function displayTemperature(response) {
let temperatureElement= document.querySelector("#temperature");
let cityElement= document.querySelector("#city");
let description= document.querySelector("#description");
let humidity= document.querySelector("#humidity");
let windElement= document.querySelector("#wind");
let dateElement= document.querySelector("#date");
let iconElement= document.querySelector("#icon");

celsiusTemperature=response.data.main.temp;


temperatureElement.innerHTML=Math.round(celsiusTemperature);
cityElement.innerHTML=response.data.name;
description.innerHTML=response.data.weather[0].description;
humidity.innerHTML=response.data.main.humidity;
windElement.innerHTML=Math.round(response.data.wind.speed);
dateElement.innerHTML=formatDate(response.data.dt*1000)
iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
iconElement.setAttribute("alt", response.data.weather[0].description)
}

function search(city) {
let apiKey="ebef9ca4a8de66ed586fac628fade056";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
event.preventDefault();
let cityInputElement = document.querySelector("#city-input");
search(cityInputElement.value);
}

function displayfahrenheitTemperature(event) {
    event.preventDefault();
    let fahrenheitTemperature= (celsiusTemperature * 9) / 5 + 32;
    let temperatureElement= document.querySelector("#temperature");
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    temperatureElement.innerHTML= Math.round(fahrenheitTemperature);
}
function displaycelsiusTemperature(event){
event.preventDefault();
 let temperatureElement= document.querySelector("#temperature");
 celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
 temperatureElement.innerHTML=Math.round(celsiusTemperature);
}
celsiusTemperature=null;
let form=document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click",displayfahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click",displaycelsiusTemperature);

function displayForecast(){
    let forecastHTML=`<div class="row">`;
forecastHTML= forecastHTML+`</div>`;
forecastElement.innerHTML=forecastHTML
let forecastElement= document.querySelector("#forecast");
let days=["Tue", "Wed", "Thu","Fri", "Sat"];
days.forEach (function(day){
forecast.innerHTML= `
<div class= "weather-forecast-day">
<div class="weather-forecast-date"> ${day} </div>
<div class= "weather-forecast-icon"> </div>
<div class= "weather-forecast-temperatures">
<div class= "weather-forecast-temperature>
 <strong> 15 </strong>
</div>
div class= "weather-forecast-temperature"> 9</div>
</div>
</div>
`
;
});
}
;




search("New York");
displayForecast();