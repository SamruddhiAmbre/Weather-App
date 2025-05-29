import React, { useEffect, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.jpg';
import sunny from '../assets/sunny.png';
import cloudy from '../assets/cloudy.png';
import drizzle from '../assets/drizzle.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import wind from '../assets/wind.png';
import overcast from '../assets/overcast.png';

const Weather = () => {
  const [weatherdata, setweatherdata] = useState(null);
  const [darkMode, setDarkMode] = useState(false); 

  const icons = {
    "01d": sunny,
    "01n": sunny,
    "02d": cloudy,
    "02n": cloudy,
    "03d": cloudy,
    "03n": cloudy,
    "04d": overcast,
    "04n": overcast,
    "09d": drizzle,
    "09n": drizzle,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow
  };

  const getQuote = (iconCode) => {
    if (!iconCode) return "Have a beautiful day!";
    if (iconCode.startsWith("01")) return "Let your day be as bright as the sky!";
    if (iconCode.startsWith("02") || iconCode.startsWith("03")) return "A few clouds won't stop your shine!";
    if (iconCode.startsWith("04")) return "Overcast skies call for cozy vibes!";
    if (iconCode.startsWith("09") || iconCode.startsWith("10")) return "It might be raining — don't forget your umbrella!";
    if (iconCode.startsWith("13")) return "Snowy and soft — stay warm and enjoy the charm!";
    return "Wishing you a lovely day, whatever the weather!";
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8376fb7ae6a8d333b76edd6d1c26f972`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        const iconCode = data.weather[0].icon;
        const icon = icons[iconCode] || sunny;
        setweatherdata({
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon: icon,
          iconCode: iconCode
        });
      } else {
        alert("City not found!");
        setweatherdata(null);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };



  return (
    <div className={`weather ${darkMode ? 'dark' : 'light'}`}>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search a city"
          id="city-input"
        />
        <img
          src={search_icon}
          alt="Search"
          onClick={() => {
            const city = document.getElementById("city-input").value;
            if (city) search(city);
          }}
        />
      </div>

      {weatherdata && (
        <>
          <img src={weatherdata.icon} alt="" className="icon" />
          <p className="temp">{weatherdata.temperature}°C</p>
          <p className="loc">{weatherdata.location}</p>
          <div className="data">
            <div className="data-row">
              <img src={wind} alt="Wind Icon" />
              <div className="text">
                <p className="wind">{weatherdata.windSpeed} m/s</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
          <p className="qoute">{getQuote(weatherdata.iconCode)}</p>
        </>
      )}
    </div>
  );
};

export default Weather;
    