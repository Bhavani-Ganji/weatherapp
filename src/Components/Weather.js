import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'; 
const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = '87626d8029653424a521eeb07acc2b72';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather App</h2>
      <input type="text" placeholder="Enter city name" onChange={handleInputChange} />
      <button onClick={getWeatherData}>Get Weather</button>
  
      {weatherData && (
        <div className="weather-data">
          <h3>{weatherData.name}</h3>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
