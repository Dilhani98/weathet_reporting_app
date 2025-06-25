'use client';
import { useState } from "react";
import Forecastcard from "./components/Forecastcard";
import SearchBar from "./components/SearchBar";


export default function Home() {


  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    try {
      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();
      if (data.error) {
        console.error("API error:", data.error);
        setWeatherData(null);
        setError("city is not found. Please try again.");
      } else {
        setWeatherData(data);
        setError(null);
      }
    } catch (error) {
      console.error("Network error:", error);
      setWeatherData(null);
      setError("Network error. Please try again later.");
    }
  };



  return (

    <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 relative">
      {/* Decorative blurred circles */}
      <div className="absolute w-40 h-40 bg-white/20 rounded-full top-10 left-10 blur-2xl"></div>
      <div className="absolute w-32 h-32 bg-white/10 rounded-full bottom-10 right-10 blur-2xl"></div>

      {/* Centered container for SearchBar and Forecastcard */}
      <div className="z-10 flex flex-col items-center gap-6">
        <SearchBar onSearch={handleSearch} />

        {error && (
          <div className="relative w-full max-w-md px-4 py-3 rounded-lg bg-red-100 border border-red-400 text-red-700 flex items-start gap-3 shadow-md animate-fade-in">
            <span className="text-xl">⚠️</span>
            <p className="flex-1">{error}</p>
            <button
              onClick={() => setError("")}
              className="text-red-600 font-bold hover:text-red-800 transition-colors"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        )}


        {weatherData && <Forecastcard data={weatherData} />}
      </div>
    </main>





  );
}
