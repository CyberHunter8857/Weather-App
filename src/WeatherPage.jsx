import React, { useEffect, useState } from "react";
import "./WeatherPage.css";
import { titleCase } from "title-case";
import weatherBackgrounds from "./weatherBackgrounds";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function WeatherPage() {
  const [time, setTime] = useState("01:59:01");
  const [date, setDate] = useState("Tuesday, 19 May 2025");
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({
    cityName: "Shevgaon",
    country: "IN",
    humidity: 52,
    temp: 29.99,
    visibility: 10000,
    weatherDesc: "Overcast Clouds",
    weatherIcon: "04d",
    windSpeed: 3.66,
    weatherMain: "Default",
  });

  const weatherKey = weatherInfo.weatherMain;
  const backgrounds =
    weatherBackgrounds[weatherKey] || weatherBackgrounds["Clear"];

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const W_API_KEY = import.meta.env.VITE_W_API_KEY;

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${W_API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();
      const result = {
        temp: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity,
        visibility: jsonResponse.visibility,
        windSpeed: jsonResponse.wind.speed,
        weatherDesc: jsonResponse.weather[0].description,
        weatherIcon: jsonResponse.weather[0].icon,
        country: jsonResponse.sys.country,
        cityName: jsonResponse.name,
        weatherMain: jsonResponse.weather[0].main,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (evt) => setCity(evt.target.value);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!city.trim()) return;

    try {
      const newInfo = await getWeatherInfo();
      setWeatherInfo(newInfo);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setCity("");
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-GB", { hour12: false });
    setTime(timeStr);
  };

  const getCurrentDate = () => {
    const now = new Date();
    const options = { weekday: "long", day: "2-digit", month: "long", year: "numeric" };
    setDate(now.toLocaleDateString("en-GB", options));
  };

  useEffect(() => {
    const timer = setInterval(getCurrentTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    getCurrentDate();
  }, []);

  return (
    <div className="main-container">
      <LeftPanel
        time={time}
        date={date}
        weatherInfo={weatherInfo}
        background={backgrounds.left}
      />
      <RightPanel
        weatherInfo={weatherInfo}
        city={city}
        onCityChange={handleChange}
        onSubmit={handleSubmit}
        error={error}
        background={backgrounds.right}
      />
    </div>
  );
}

export default WeatherPage;
