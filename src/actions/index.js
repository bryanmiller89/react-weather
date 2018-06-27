import axios from 'axios';

const API_KEY = '2d3236dc0763141f0d4a0950b096febb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request)

  return {
    type: FETCH_WEATHER,
    // Payload is optional property that goes with actions that can contain additional data that describes the action
    payload: request
  }
}