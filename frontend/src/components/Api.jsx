import React, { useState, useEffect } from 'react';
import Slider from './Slider/Slider';



const fetchMoviePoster = async (title) => {
  const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}?exact=true&titleType=movie`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b610d7269bmsh5ea0d899abbb9e8p199e7ejsn4c57ccd01931',
      'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (result && result.results && result.results.length > 0) {
      // return result.results[0].primaryImage.url;
      return result.results[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

function ApiCall() {
  const [posters, setPosters] = useState([]);
  const movieTitles = ['The Dark Knight', 'Inception', 'Titanic', 'The Matrix', 'Toy Story 2', 'Forrest Gump',
    'Fight Club', 'Interstellar', 'Sen to Chihiro no kamikakushi', 'Parasite', 'The Lion King', 'Spider-Man: Across the Spider-Verse'];

  useEffect(() => {
    const getPosters = async () => {
      const posterUrls = await Promise.all(
        movieTitles.map(async (title) => {
          const url = await fetchMoviePoster(title);
          return url;
        })
      );
      setPosters(posterUrls.filter(url => url !== null)); // Remove any null values
    };

    getPosters();
  }, []);

  return (
    <Slider images={posters} title='Top Picks For You'/>
  )
}

export default ApiCall;
