import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
      );
      const data = await res.json();
      setMovies(data.results);
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">인기 영화 리스트</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
