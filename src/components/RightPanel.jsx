import React from "react";
import { titleCase } from "title-case";
import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";

function RightPanel({ weatherInfo, city, onCityChange, onSubmit, error, background }) {
  return (
    <div
      className="right-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${weatherInfo.weatherIcon}@4x.png`}
        alt="weather-icon"
      />
      <div className="weather-type">{titleCase(weatherInfo.weatherDesc)}</div>
      <hr />
      <div className="info-box">
        <SearchBox
          city={city}
          onCityChange={onCityChange}
          onSubmit={onSubmit}
          error={error}
        />
        <WeatherInfo weatherInfo={weatherInfo} />
      </div>
    </div>
  );
}

export default RightPanel;
