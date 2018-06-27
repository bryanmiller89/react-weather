import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ]); // Mutating array
      return [ action.payload.data, ...state ]; // Creating new array
  }

  console.log('Action received:', action);
  return state;
}