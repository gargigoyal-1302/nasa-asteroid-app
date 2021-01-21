import {
  GET_ALL_ASTEROIDS,
  GET_ALL_ASTEROIDS_FAILED,
  GET_ASTEROID_DETAILS,
  GET_ASTEROID_DETAILS_FAILED,
} from "./ActionsType";

const initialState = {
  allAsteroids: [],
  asteroid: [],
  loading: true,
  error: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ASTEROIDS:
      return {
        ...state,
        allAsteroids: action.payload,
        loading: false,
      };
    case GET_ALL_ASTEROIDS_FAILED:
      return {
        ...state,
        allAsteroids: action.payload,
        loading: false,
        error: action.payload,
      };
    case GET_ASTEROID_DETAILS:
      return {
        ...state,
        asteroid: action.payload,
        loading: false,
      };
    case GET_ASTEROID_DETAILS_FAILED:
      return {
        ...state,
        asteroid: action.payload,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
