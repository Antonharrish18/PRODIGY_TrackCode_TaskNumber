const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

function getWeather() {
const locationInput = document.getElementById('locationInput').value;

if (locationInput.trim() === '') {
alert('Please enter a location.');
return;
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`)
.then(response => response.json())
.then(data => {
const weatherInfo = document.getElementById('weatherInfo');
weatherInfo.innerHTML = `
<h2>${data.name}, ${data.sys.country}</h2>
<p>Weather: ${data.weather[0].description}</p>
<p>Temperature: ${data.main.temp}°C</p>
<p>Feels like: ${data.main.feels_like}°C</p>
<p>Humidity: ${data.main.humidity}%</p>
`;
})
.catch(error => {
console.error('Error:', error);
alert('Failed to fetch weather data. Please try again.');
});
}
