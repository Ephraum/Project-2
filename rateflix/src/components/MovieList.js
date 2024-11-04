import { Box } from '@chakra-ui/react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Box>
  );
}

export default MovieList;
