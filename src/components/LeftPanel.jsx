import React from "react";

function LeftPanel({ time, date, weatherInfo, background }) {
  return (
    <div
      className="left-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="location">
        <div className="city-name">{weatherInfo.cityName}</div>
        <div className="country-name">{weatherInfo.country}</div>
      </div>
      <div className="time-container text-glass">
        <div className="time">
          <div className="clock">{time}</div>
          <div className="date">{date}</div>
        </div>
        <div className="temperature">
          <b>{weatherInfo.temp}&deg;</b>c
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
