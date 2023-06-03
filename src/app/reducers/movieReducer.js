import { ActionTypes } from "../actionTypes";
const initialState = {
  popularFilms: [],
  genres: [],
  loading: false,
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_FILMS:
      return {
        ...state,
        popularFilms: payload,
      };
    case ActionTypes.GET_GENRES:
      return {
        ...state,
        genres: payload,
      };

    default:
      return state;
  }
};
