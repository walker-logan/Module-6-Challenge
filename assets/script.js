$(document).ready(function () {
  const apiKey = "your_api_key_here";
  const searchButton = $("button");
  const searchBar = $(".search-bar");

  // function to grab the city name
  function fetchWeatherData(city) {
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`,
      method: "GET",
    }).then(function (response) {
      console.log("Ajax Reponse \n-------------");
      console.log(response);
      const lat = response.coord.lat;
      const lon = response.coord.lon;
      const cityName = response.name;

      $("#location").text(cityName);

      fetchFiveDayForecast(lat, lon);
    });
  }
  // console.log(city)

  // function to grab the lat an lon and five day format
  function fetchFiveDayForecast(lat, lon) {
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`,
      method: "GET",
    }).then(function (response) {
      console.log("Ajax Reponse \n-------------");
      console.log(response);
      const forecastList = response.list;
      for (let i = 0; i < 5; i++) {
        const forecast = forecastList[i * 8];
        const date = new Date(forecast.dt_txt);
        const icon = forecast.weather[0].icon;
        const temp = forecast.main.temp;
        const humidity = forecast.main.humidity;
        const windSpeed = forecast.wind.speed;

        
      }
    });
  }
});
