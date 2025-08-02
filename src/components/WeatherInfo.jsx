import React from "react";

function WeatherInfo({ weatherInfo }) {
  return (
    <>
      <div className="info-city">
        {weatherInfo.cityName}, {weatherInfo.country}
      </div>
      <hr />
      <div className="info-temp">
        <p>Temprature</p> <p>{weatherInfo.temp}&deg;c</p>
      </div>
      <div className="info-humidity">
        <p>Humidity</p> <p>{weatherInfo.humidity}%</p>
      </div>
      <div className="info-visibility">
        <p>Visibility</p> <p>{weatherInfo.visibility} m</p>
      </div>
      <div className="info-windspeed">
        <p>Wind Speed</p> <p>{weatherInfo.windSpeed} m/s</p>
      </div>
    </>
  );
}

export default WeatherInfo;
