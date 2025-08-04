import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [city, setCity] = useState("Lahore"); // Default city
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "2437bac0bcb5408382b95047250108"; // Replace with your actual key

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`
      );
      const data = await res.json();
      if (data.error) {
        setError(data.error.message);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("Something went wrong. Try again!");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(city); // Fetch default weather for Lahore on first load
  }, []);

  const handleSearch = () => fetchWeather(city);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-10">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
           Weather Forecast
        </h1>

        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
          >
            Search
          </button>
        </div>

        {loading && (
          <p className="text-center text-gray-500 mt-4">Loading weather...</p>
        )}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
};

export default App;
