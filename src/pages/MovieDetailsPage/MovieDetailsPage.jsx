import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import './MovieDetailsPage.css';

function MovieDetailsPage() {
  const { imdbID } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMovie() {
      setIsLoading(true);
      setError(null);
      setMovie(null);

      try {
        const apiKey = import.meta.env.VITE_OMDB_API_KEY;

        if (!apiKey) {
          setError('API-ключ не найден. Проверь файл .env');
          return;
        }

        const params = new URLSearchParams({
          apikey: apiKey,
          i: imdbID,
          plot: 'full',
        });

        const response = await fetch(
          `https://www.omdbapi.com/?${params}`
        );

        const data = await response.json();

        if (data.Response === 'False') {
          setError(data.Error);
          setMovie(null);
        } else {
          setMovie(data);
        }

      } catch (err) {
        console.error(err);
        setError('Не удалось загрузить информацию о фильме');

      } finally {
        setIsLoading(false);
      }
    }

    loadMovie();
  }, [imdbID]);

  return (
    <main className="movie-details-page">
      <div className="container">

        {isLoading ? (
          <Loader label="Загружаем информацию о фильме..." />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <MovieDetails movie={movie} />
        )}

      </div>
    </main>
  );
}

export default MovieDetailsPage;
