// src/pages/Home.jsx

import axios from 'axios';
import React, { useState } from 'react';

import Forecast from '../components/Forecast';
import Map from '../components/Map';
import RecentSearches from '../components/RecentSearches';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import YouTubeVideos from '../components/YouTubeVideos';

function Home() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (searchLocation) => {
    try {
      const response = await axios.post('http://localhost:5000/api/weather', {
        location: searchLocation,
      });

      const weatherData = response.data.weatherData;

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      const forecastList = forecastResponse.data.list.filter((item) =>
        item.dt_txt.includes('12:00:00')
      );

      setWeatherData(weatherData);
      setForecastData(forecastList.slice(0, 5));
      setLocation(searchLocation);
      setError('');
    } catch (err) {
      console.error('Weather API error:', err.message);
      setError('City not found. Please try again.');
      setWeatherData(null);
      setForecastData(null);
      setLocation('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 py-10 px-4 flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-900 drop-shadow-sm">🌦️ Weather Explorer App</h1>
        <p className="mt-2 text-gray-700 text-lg">Your go-to tool for real-time weather, maps, forecasts & more</p>
      </div>

      <div className="w-full max-w-2xl">
        <SearchBar onSearch={handleSearch} />
      </div>

      {error && (
        <div className="mt-4 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded max-w-xl w-full text-center">
          {error}
        </div>
      )}

      {location && weatherData && (
        <div className="mt-6 text-center text-2xl font-semibold text-gray-800">
          Showing weather for: <span className="text-blue-800">{location}</span>
        </div>
      )}

      {weatherData && (
        <div className="mt-6 w-full max-w-xl bg-white shadow-xl rounded-xl p-6">
          <WeatherCard weather={weatherData} />
        </div>
      )}

      {weatherData?.coord && (
        <div className="mt-8 w-full max-w-5xl bg-white shadow-lg rounded-xl p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">📍 Location on Map</h3>
          <Map lat={weatherData.coord.lat} lon={weatherData.coord.lon} />
        </div>
      )}

      {forecastData && (
        <div className="mt-12 w-full max-w-5xl bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">📅 5-Day Forecast</h3>
          <Forecast forecast={forecastData} />
        </div>
      )}

      <div className="mt-12 w-full max-w-2xl bg-white shadow-md rounded-xl p-5">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">🕒 Recent Searches</h4>
        <RecentSearches />
      </div>

      {location && (
        <div className="mt-10 w-full max-w-4xl bg-white shadow-md rounded-xl p-5">
          <h4 className="text-xl font-semibold text-gray-700 mb-4">🎥 Weather & Travel Videos in {location}</h4>
          <YouTubeVideos city={location} />
        </div>
      )}
    </div>
  );
}

export default Home;
