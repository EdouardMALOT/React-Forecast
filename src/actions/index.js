import axios from 'axios';
import { FETCH_FORECAST } from './actions_types';

const API_KEY = '3d1f6baa785b265b02c7df7784a625e5';
const BASE_URL =  `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric&q=`;

export function FetchWeatherAction(city) {

  const finalUrl = `${BASE_URL}${city},fr`;
  const request = axios.get(finalUrl);

  return {
    type: FETCH_FORECAST,
    payload :request
  }
}
