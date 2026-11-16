import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

function MovieList({movies}) {
  if (!Array.isArray(movies) || movies.length ===0){
    return null }
  return (
    <ul className="movie-list">
      {movies.map((movie) =>(
        <li key={movie.imbID}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
