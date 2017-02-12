import { FETCH_FORECAST } from '../actions/actions_types';

export function ReducerWeatherData(state=[], action) {

  switch (action.type) {
    case FETCH_FORECAST:
      return [action.payload.data, ...state];
    default:
      return state;
  }

}
