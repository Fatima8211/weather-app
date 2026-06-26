const API_KEY = "a0d2eac3b01045ff8be55638262606";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeather);

async function getWeather(){

    const city = document.getElementById("cityInput").value.trim();

    if(city===""){

        alert("Please enter a city name.");

        return;

    }

    const url =
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        if(data.error){

            alert(data.error.message);

            return;

        }

        document.getElementById("city").innerHTML =
        `${data.location.name}, ${data.location.country}`;

        document.getElementById("temp").innerHTML =
        `${data.current.temp_c}°C`;

        document.getElementById("condition").innerHTML =
        data.current.condition.text;

        document.getElementById("humidity").innerHTML =
        `${data.current.humidity}%`;

        document.getElementById("wind").innerHTML =
        `${data.current.wind_kph} km/h`;

        document.getElementById("feels").innerHTML =
        `${data.current.feelslike_c}°C`;

        document.getElementById("uv").innerHTML =
        data.current.uv;

        document.getElementById("icon").src =
        "https:" + data.current.condition.icon;

    }

    catch(error){

        alert("Unable to fetch weather data.");

    }

}