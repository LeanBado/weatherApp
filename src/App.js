import {Search}  from "./components/search/search";
import '../src/App.css'
import { CurrentWeather } from "./components/current-weather/current-weather";
import { urlWeather, weatherKey } from "./api";
import { useState } from "react";
import { Forecast } from "./components/forecast/forecast";

function App() {

  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)


  const handleOnSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

    try {
    const currentWeatherFetch = await fetch(`${urlWeather}weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric&lang=sp`)
    const forecastFetch = await fetch(`${urlWeather}forecast?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric&lang=sp`)

    const weatherResponse = await currentWeatherFetch.json();
    const forecastResponse = await forecastFetch.json();

    setWeather({city: searchData.label, ...weatherResponse})
    setForecast({city: searchData.label, ...forecastResponse})
      
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      {weather && <CurrentWeather dataWeather={weather}></CurrentWeather>}
      {forecast && <Forecast dataForecast={forecast}></Forecast>}
    </div>
  );
}

export default App;
