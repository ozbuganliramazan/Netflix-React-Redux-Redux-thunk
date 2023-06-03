import axios from "axios";
import { ActionTypes } from "../actionTypes";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjkzZWIzMDUyY2VlMDQ0MmJlMmY2MGE0NjVlOTc5NCIsInN1YiI6IjY0N2FmM2VjMTc0OTczMDEzNTAxMzQxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.261gkqgitrKjiY0TchBmsph7HPfqeYAaTfU1jrCWfeg",
  },
};

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getFilms = () => (dispatch) => {
  axios
    .get("/movie/popular", options)
    .then((res) =>
      dispatch({
        type: ActionTypes.GET_FILMS,
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};

export const getGenres = () => (dispatch) => {
  axios.get('/genre/movie/list', options).then((res) =>dispatch({
    type: ActionTypes.GET_GENRES,
    payload: res.data.genres,
  }));
};
