import { Box, Text, Button } from '@chakra-ui/react';

function MovieCard({ movie }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" m={4} p={4} width="200px">
      <Text fontWeight="bold">{movie.title}</Text>
      <Text>{movie.description}</Text>
      <Button mt={2}>Rate this Movie</Button>
    </Box>
  );
}

export default MovieCard;
