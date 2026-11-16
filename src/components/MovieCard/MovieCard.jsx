import {useNavigate} from 'react-router-dom'
import LikeButton from '../LikeButton/LikeButton';
import './MovieCard.css';

const TYPE_LABELS = {
  movie : 'Фильм',
  series: 'Сериал',
  episode: 'Эпизод',
}

function MovieCard({movie}) {
  const navigate = useNavigate()
  const {Title, Year, Poster, Type, imdbID} = movie

  const hasPoster = Poster && Poster !== 'N/A'

  return (
    <article className="movie-card">
      <button type="button" 
      className="movie-card__poster-button"
      aria-label={`Открыть страницу фильма "${Title}"`}
      onClick={() => navigate(`/movie/${imdbID}`)} >
        {hasPoster ? (<img
          className="movie-card__poster"
          src={Poster}
          alt={Title}
        />) : (
          <div className='movie-card_no-poster'>Постер отсутсвует</div>
        )}
        <span className="movie-card__type">
        {TYPE_LABELS[Type] || Type}
        </span>
      </button>

      <div className="movie-card__like">
        <LikeButton />
      </div>

      <div className="movie-card__info">
        <h3 className="movie-card__title" title={Title}>{Title}</h3>
        <p className="movie-card__year">{Year}</p>
      </div>
    </article>
  );
}

export default MovieCard;
