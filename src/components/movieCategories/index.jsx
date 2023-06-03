import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "../../app/actions/movieAction";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { baseImgUrl } from "../hero";
const MovieCategories = ({ title, fetchUrl }) => {
  const [films,setFilms]=useState([]);
  useEffect(() => {
    axios.get(fetchUrl, options).then((res) => setFilms(res.data.results));
  });

  return (
    <div className="bg-dark text-light">
      <h1>{title}</h1>
<Splide options={{autoWidth:true, gap: 10, pagination:false}}>
{films.map((film) =>(
  <SplideSlide key={film.id}>
    <img className="film" src={`${baseImgUrl}${film.backdrop_path}`} />
 
  </SplideSlide>
))}
</Splide>

    </div>
  );
};

export default MovieCategories;
