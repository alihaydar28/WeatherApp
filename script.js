const searchBtn = document.querySelector('.searchBtn');
const inputField = document.querySelector('.inputField');
const cityName = document.querySelector('.cityName');
const temp = document.querySelector('.temp');
const feelslike = document.querySelector('.feelsLikeSpan');
const humidity = document.querySelector('.humiditySpan');
const wind = document.querySelector('.windSpan');

searchBtn.addEventListener('click', function() {
    // bdna n3ayet la shi function hon w naatiya l search result
});

async function getWeatherInfo(city ='beirut'){
    try{
        const response= await fetch(`https://api.weatherapi.com/v1/current.json?key=1298f3c1dfd04851afa122550233006&q=${city}`);
        const weatherData = await response.json();

        cityName.textContent=weatherData.location.name;
        temp.textContent=weatherData.current.temp_c+" °C";
        feelslike.textContent=weatherData.current.feelslike_c;
        humidity.textContent=weatherData.current.humidity;
        wind.textContent=(weatherData.current.wind_mph)*1.60;
    }catch(err){
        console.log(err);
    }
};

getWeatherInfo('london');


