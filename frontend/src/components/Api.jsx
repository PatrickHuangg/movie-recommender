import React, { useState, useEffect } from 'react';
import Slider from './Slider/Slider';


// API that fetches the basic information about a movie, such as title, release date, directors and ratings
const fetchMovieInfo = async (title) => {
  // const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}?exact=true&titleType=movie`;
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'x-rapidapi-key': 'b610d7269bmsh5ea0d899abbb9e8p199e7ejsn4c57ccd01931',
  //     'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
  //   }
  // };
  const url = `http://www.omdbapi.com/?apikey=3fcdca11&t=${title}`;
  const options = {
    method: 'GET',
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result)
    if (result && result !== null) {
      // return result.results[0].primaryImage.url;
      return result;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

// API that will get the movie card images and services available to users so they can view the movie
const fetchMovieServices = async (id) => {
  const url = `https://streaming-availability.p.rapidapi.com/shows/${id}?series_granularity=episode&output_language=en`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b610d7269bmsh5ea0d899abbb9e8p199e7ejsn4c57ccd01931',
      'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (result && result !== null) {
      // return result.results[0].primaryImage.url;
      return result;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

// NEED TO RENAME POSTERS TO SOME BETTER SINCE IT JUST THE FULL RESULT rather than just the img url
function ApiCall() {
  const [movieResults, setMovieResults] = useState([]);
  const [movieServices, setMovieServices] = useState([]);
  const movieTitles = ['The Dark Knight','Inception', 'Titanic', 'The Matrix'];
  // const movieTitles = ['The Dark Knight', 'Inception', 'Titanic', 'The Matrix', 'Toy Story 2', 'Forrest Gump',
  //   'Fight Club', 'Interstellar', 'Spirited Away', 'Parasite', 'The Lion King', 'Spider-Man: Across the Spider-Verse'];


  // useEffect(() => {
  //   const getInfos = async () => {
  //     const movieInfos = await Promise.all(
  //       movieTitles.map(async (title) => {
  //         const info = await fetchMovieInfo(title);
  //         return info;
  //       })
  //     );
  //     setMovieResults(movieInfos.filter(info => info !== null)); // Remove any null values
  //   };

  //   getInfos();
  // }, []);

  // useEffect(() => {
  //   const getServices = async () => {
  //     console.log("HIIIIIII")
  //     const movieServices = await Promise.all(
  //       movieResults.map(async (movie) => {
  //         const servicesInfo = await fetchMovieServices(movie.imdbID);
  //         console.log(servicesInfo)
  //         return servicesInfo;
  //       })
  //     );
  //     setMovieServices(movieServices.filter(servicesInfo => servicesInfo !== null)); // Remove any null values
  //   };

  //   if (movieResults.length > 0) {
  //     getServices();
  //   }
  // }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const movieInfoArray = await Promise.all(
  //         movieTitles.map(async (title) => {
  //           const info = await fetchMovieInfo(title);
  //           return info;
  //         })
  //       );

  //       const filteredMovieInfo = movieInfoArray.filter(info => info !== null);
  //       setMovieResults(filteredMovieInfo);

  //       const serviceInfoArray = await Promise.all(
  //         filteredMovieInfo.map(async (movie) => {
  //           const servicesInfo = await fetchMovieServices(movie.imdbID);
  //           return servicesInfo;
  //         })
  //       );

  //       const filteredServiceInfo = serviceInfoArray.filter(info => info !== null);
  //       setMovieServices(filteredServiceInfo);

  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResults = await Promise.all(
          movieTitles.map(async (title) => {
            const info = await fetchMovieInfo(title);
            // if (info) {
            //   const servicesInfo = await fetchMovieServices(info.imdbID);
            //   return { ...info, services: servicesInfo };
            // }
            return info;
            return null;
          })
        );
        setMovieResults(movieResults.filter(data => data !== null)); // Remove any null values
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <Slider results={movieResults} title='Top Picks For You'/>
  )
}

export default ApiCall;
