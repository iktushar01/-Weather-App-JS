const apiKey = "0c878e6f1959beca52294b966961aff3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("input");
const searchBtn = document.getElementById("btn");
const weatherIcon = document.getElementById("weatherIcon")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data)
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
    document.getElementById("wind").innerHTML = `${data.wind.speed} km/h`;

    if (data.weather[0].main === "Clear") {
        weatherIcon.src = "./images/clear.png";
    } 
    else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "./images/rain.png";
    } 
    else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
    } 
    else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "./images/mist.png";
    } 
    else if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./images/clouds.png";
    } 
    else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "./images/snow.png";
    } 
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    document.getElementById("weatherRemove1").classList.remove("hidden");
    document.getElementById("weatherRemove2").classList.remove("hidden");
    document.getElementById("noData").classList.add("hidden");
});
