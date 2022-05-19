const weather = () => {

  const weatherBlock = document.getElementById('weather');

  async function loadWeather(e) {

    const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=35&lon=139&lang=ru&q=Moscow&appid=0e9e6a5e00934145dfd39eff1f5f06f1';
    const response = await fetch(server, {
      method: 'GET',
    });
    const responseResult = await response.json();
    if (response.ok) {
      getWeather(responseResult);
    } else {
      weatherBlock.innerHTML = responseResult.message;
    }
  }

  function getWeather(data) {

    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;

    const template = `
    <div class="weather__header">
      <div class="weather__main">
        <span class="weather__city">${location}</span>
        <span class="weather__status">${weatherStatus}</span>
      </div>
      <div class="weather__icon">
        <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">        
      </div>
    </div>
    <div class="weather__temp-box">  
      <span class="weather__temp">${temp}
        <span>С</span> 
      </span>    
      <span class="weather__feels-like">
      <span> ощущается как:</span> ${feelsLike}
        <span>С</span> 
      </span>
    </div>`;

    weatherBlock.innerHTML = template;
  }
  if (weatherBlock) {
    loadWeather();
  }
};

export default weather;