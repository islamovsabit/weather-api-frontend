document.addEventListener('DOMContentLoaded', function () {
    const API_KEY = 'fb0392555857f0c40fae7f4dc0734c19';
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    
    const cityInput = document.getElementById('cityInput');
    const searchButton = document.getElementById('searchButton');
    const weatherInfo = document.getElementById('weatherInfo');
    
    searchButton.addEventListener('click', function () {
        const city = cityInput.value;
        console.log(city);
        if (city) {
            fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
                .then(response => response.json())
                .then(data => {
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;
                    const weatherHtml = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
                    weatherInfo.innerHTML = weatherHtml;
                })
                .catch(error => {
                    weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
                });
        } else {
            weatherInfo.innerHTML = '<p>Please enter a city name.</p>';
        }
    });
});