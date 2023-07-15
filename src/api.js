export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const API_KEY = process.env.REACT_APP_API_KEY_ENV
const API_KEY_WEATHER = process.env.REACT_APP_WEATHER_KEY_ENV
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com' // la documental en ->https://rapidapi.com/wirefreethought/api/geodb-cities/
	}
};

export const urlWeather = 'https://api.openweathermap.org/data/2.5/' /// falta -> weather?lat={lat}&lon={lon}&appid={API key}
export const weatherKey = API_KEY_WEATHER

