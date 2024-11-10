const fetchMovies = async (query) => {
    try {
        const response = await fetch("http://localhost:5000/getmovies");
        const data = await response.json();
        return data.results || []; // Ensure it returns an array
    } catch (error) {
        console.error('Error fetching movies:', error);
        return []; // Return an empty array on error
    }
};

export { fetchMovies };