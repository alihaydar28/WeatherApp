const searchBtn = document.querySelector('.searchBtn');
const inputField = document.querySelector('.inputField');
const weatherInfo = {
  cityName: document.querySelector('.cityName'),
  temp: document.querySelector('.temp'),
  feelslike: document.querySelector('.feelsLikeSpan'),
  humidity: document.querySelector('.humiditySpan'),
  wind: document.querySelector('.windSpan')
};


searchBtn.addEventListener('click', handleSearch);
inputField.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    handleSearch();
  }
});

async function getWeatherInfo(city = 'beirut') {
    try {

        updateWeatherInfo("Loading", "-", "-", "-", "-");
        // Simulate a delay of 1 second with setTimeout so we see that it's loading while fetching
        setTimeout(async () => {
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1298f3c1dfd04851afa122550233006&q=${city}`);
          const weatherData = await response.json();
            
          const name=weatherData.location.name;
          const { temp_c, feelslike_c, humidity, wind_mph } = weatherData.current;
          updateWeatherInfo(name, temp_c, feelslike_c, humidity, wind_mph);
    
        
        }, 1000);
    
      } catch (err) {
        updateWeatherInfo("wrong city or field is empty", "-", "-", "-", "-");
     
      }

};



function updateWeatherInfo(cityName, temp, feelslike, humidity, wind_mph) {
  weatherInfo.cityName.textContent = cityName;
  weatherInfo.temp.textContent = `${temp} °C`;
  weatherInfo.feelslike.textContent = feelslike;
  weatherInfo.humidity.textContent = humidity;
  weatherInfo.wind.textContent = (wind_mph * 1.60).toFixed(2);
}

function handleSearch() {
  getWeatherInfo(inputField.value);
  inputField.value = "";
}

getWeatherInfo('beirut');



