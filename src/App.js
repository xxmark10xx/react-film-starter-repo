import React, { useState } from 'react';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';

function App() {
  const [films, setFilms] = useState(TMDB.films);
  const [current, setCurrent] = useState({});

  const handleDetailsClick = film => {
    console.log(`Fetching movie details for ${film.title}`)
    setCurrent(film)
  }

  return (
    <div className="film-library">
      <FilmListing films={films} handleDetailsClick={handleDetailsClick} />
      <FilmDetails film={current} />
    </div>
  );
}


// import React, { Component } from 'react';
// import './App.css';
// import Details from './Details';
// import FilmList from './FilmList';
// import TMDB from './TMDB';

// class App extends Component {
//   render() {
//     return (
//       <div className="film-library">
//         <FilmList 
//           films={TMDB.films}
//         />
//         <Details 
//           films={TMDB.films}
//         />
//       </div>
//     )
//   }
// }

// export default App;