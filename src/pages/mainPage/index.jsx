import { useEffect } from "react";
import Hero from "../../components/hero";
import MovieCategories from "../../components/movieCategories";
import { useDispatch, useSelector } from "react-redux";
import { getFilms, getGenres } from "../../app/actions/movieAction";
const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    dispatch(getFilms());

    dispatch(getGenres());
  }, []);

  return (
    <div className="bg-dark text-light">
      <Hero />
      {state.genres.slice(0, 10).map((genre) => (
        <MovieCategories
          key={genre.id}
          title={genre.name}
          fetchUrl={`/discover/movie?with_genres=${genre.id}`}
        />
      ))}
    </div>
  );
};

export default MainPage;
