import { combineReducers } from 'redux';
import { ReducerWeatherData } from './reducer-weather-data'

const rootReducer = combineReducers({
  weatherDatas: ReducerWeatherData
});

export default rootReducer;
