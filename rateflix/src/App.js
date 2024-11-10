import React from 'react';
import { ChakraProvider, Box, defaultSystem } from '@chakra-ui/react';
// import { Provider } from "@/components/ui/provider"
import './App.css';
import Header from './components/Header'; // Ensure this path is correct
import MovieList from './components/MovieList'; // Ensure this path is correct

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box className="App">
        <Header />
        <h1>RateFlix</h1>
        {/* Add more components here */}
        <MovieList movies={[{id:1,title:"movie 1", description:"Hi Im a movie"}]}/>
        {/* API needs route to get movies 
      movie list--> movie cards  */}
      </Box>
    </ChakraProvider>
  );
}

export default App;