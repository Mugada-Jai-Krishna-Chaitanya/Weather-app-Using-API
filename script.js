const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('search-button');
const weatherImage = document.querySelector('weather-img');
const temperature = document.querySelector('temperature');
const description = document.querySelector('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind_speed');

async function checkWeather(city){
    const api_key = "4cd0eee81294c867b4bc4cfc64e998c5";
    // const api_key = "7d6b37a2b38b0ec1f9239642cce1c3b6";
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data =await fetch(`${url}`).then(response => response.json());

    console.log(weather_data);
}


searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});