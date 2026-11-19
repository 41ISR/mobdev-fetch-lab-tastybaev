
import { useNavigate } from 'react-router-dom';
import LikeButton from '../LikeButton/LikeButton';
import RatingBadge from '../RatingBadge/RatingBadge';
import './MovieDetails.css';

function MovieDetails({ movie }) {
  const navigate = useNavigate();

  if (!movie) return null;

  const {
    Title,
    Year,
    Rated,
    Runtime,
    Poster,
    Genre,
    Plot,
    Ratings = [],
    Director,
    Writer,
    Actors,
    Released,
    Language,
    Country,
    Awards,
    BoxOffice,
  } = movie;

  const hasPoster = Poster && Poster !== 'N/A';

  const facts = [
    { label: 'Режиссёр', value: Director },
    { label: 'Сценарий', value: Writer },
    { label: 'В ролях', value: Actors },
    { label: 'Дата выхода', value: Released },
    { label: 'Язык', value: Language },
    { label: 'Страна', value: Country },
    { label: 'Награды', value: Awards },
    { label: 'Сборы', value: BoxOffice },
  ];

  return (
    <article className="movie-details">
      <button
        type="button"
        className="movie-details__back"
        onClick={() => navigate(-1)}
      >
        ← Ко всем фильмам
      </button>

      <div className="movie-details__layout">

        <div className="movie-details__poster-col">
          {hasPoster ? (
            <img
              className="movie-details__poster"
              src={Poster}
              alt={Title}
            />
          ) : (
            <div className="movie-details__poster--placeholder">
              Постер отсутствует
            </div>
          )}
        </div>

        <div className="movie-details__main">

          <div className="movie-details__heading">
            <div>
              <h1 className="movie-details__title">
                {Title}
              </h1>

              <p className="movie-details__meta">
                {[Year, Rated, Runtime]
                  .filter(value => value && value !== 'N/A')
                  .join(' · ')}
              </p>
            </div>

            <LikeButton />
          </div>

          <p className="movie-details__genre">
            {Genre}
          </p>

          <p className="movie-details__plot">
            {Plot}
          </p>

          <div className="movie-details__ratings">
            {Ratings.map((rating) => (
              <RatingBadge
                key={rating.Source}
                source={rating.Source}
                value={rating.Value}
              />
            ))}
          </div>

          <dl className="movie-details__facts">
            {facts
              .filter(item => item.value && item.value !== 'N/A')
              .map(item => (
                <div
                  className="movie-details__fact"
                  key={item.label}
                >
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
          </dl>

        </div>
      </div>
    </article>
  );
}

export default MovieDetails;
