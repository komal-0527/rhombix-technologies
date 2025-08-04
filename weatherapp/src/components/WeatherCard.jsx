import React from "react";

const WeatherCard = ({ data }) => {
  const { location, current } = data;

  return (
    <div className="bg-orange-50 rounded-lg p-6 shadow-inner mt-4 transition-all">
      <h2 className="text-2xl font-semibold text-center text-orange-800">
        {location.name}, {location.country}
      </h2>

      <div className="flex items-center justify-center mt-6">
        <img
          src={current.condition.icon}
          alt="weather-icon"
          className="w-20 h-20"
        />
        <div className="ml-6 text-center">
          <p className="text-4xl font-bold text-orange-700">
            {current.temp_c}°C
          </p>
          <p className="text-lg text-gray-600">{current.condition.text}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-around text-gray-700 text-sm">
        <div>
          <p>Humidity</p>
          <p className="font-semibold">{current.humidity}%</p>
        </div>
        <div>
          <p>Wind</p>
          <p className="font-semibold">{current.wind_kph} kph</p>
        </div>
        <div>
          <p>Feels Like</p>
          <p className="font-semibold">{current.feelslike_c}°C</p>
        </div>
      </div>

      <p className="mt-4 text-center text-gray-500 text-xs">
        Last Updated: {current.last_updated}
      </p>
    </div>
  );
};

export default WeatherCard;
