import {
  GET_ALL_ASTEROIDS,
  GET_ALL_ASTEROIDS_FAILED,
  GET_ASTEROID_DETAILS,
  GET_ASTEROID_DETAILS_FAILED,
} from "./ActionsType";

import { getAllAsteroidApi, AsteroidDetailsApi } from "../services";

export const getAllAsteroidAction = () => {
  return async (dispatch) => {
    await getAllAsteroidApi()
      .then((response) => {
        dispatch({
          type: GET_ALL_ASTEROIDS,
          payload: response.data.near_earth_objects,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_ASTEROIDS_FAILED,
          payload: error.message,
        });
      });
  };
};

export const getAsteroidDetailsAction = (id) => {
  return async (dispatch) => {
    await AsteroidDetailsApi(id)
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_ASTEROID_DETAILS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ASTEROID_DETAILS_FAILED,
          payload: error.message,
        });
      });
  };
};
