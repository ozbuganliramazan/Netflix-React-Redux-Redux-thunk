import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { options } from '../../app/actions/movieAction';
import axios from 'axios';
import { baseImgUrl } from '../../components/hero';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    axios
      .get(`/movie/${movieId}`, options)
      // state e aktarma
      .then((res) => setMovieDetail(res.data));
  }, []);

  console.log(movieDetail);

  if (!movieDetail) return 'Loading...';

  return (
    // denemöe
    <div className="d-flex movie-detail bg-dark text-light">
      <div className="d-flex justify-content-center">
        <img className="w-50" src={`${baseImgUrl}${movieDetail.poster_path}`} />
      </div>
      <div>
        <h1>{movieDetail.title}</h1>
        <p>{movieDetail.overview}</p>
        <div className="row row-cols-2">
          <div>
            <p>Maliyet: {movieDetail.budget}</p>
            <p>Hasılat: {movieDetail.revenue}</p>
            <p>Kazanç: {movieDetail.revenue - movieDetail.budget}</p>
          </div>
          <div>
            <div>
              Diller:
              {movieDetail.spoken_languages.map((lang) => (
                <p key={lang.id} className="badge">
                  {lang.name}
                </p>
              ))}
            </div>
            <div>
              Kategori:
              {movieDetail.genres.map((genre) => (
                <p className="badge">{genre.name}</p>
              ))}
            </div>
            <div>
              Yapımcı:
              {movieDetail.production_companies.map((comp) => (
                <p className="badge">{comp.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;