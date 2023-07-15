import './current-weather.css'

export const CurrentWeather = ({dataWeather}) => {
   const {city, weather, main, wind} = dataWeather
   const {feels_like, humidity, pressure, temp} = main
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{city}</p>
                    <p className='weather-description'>{weather[0].description}</p>
                </div>
                <img alt='weather' className='weather-icon' src={`icons/${weather[0].icon}.png`}/>
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.ceil(temp)}</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{Math.ceil(feels_like)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{Math.ceil(wind.speed)} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{pressure} hPa</span>
                    </div>
                </div>
            </div>
           

        </div>
    )
}