import React, { useState } from "react";
import Faves from "./Faves";
import Poster from "./Poster";

export default function FilmRow({films}) {
  const [row, setRow] = useState(false)
  const film = films
  return(
    <div onClick={() => setRow(!row)}className="film-row">
      <Poster poster_path={film.poster_path} overview={film.overview} />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{film.release_date.slice(0, 4)}</p>
      </div>
      <Faves />
    </div>
  )
}

// export default class FilmRow extends Component {

//   handleDetailsClick = (film) => {
//         console.log("Fetching Details For...")
//   }

//   render() {
//     const film = this.props.film
//     return (
//         <div onClick={() => this.handleDetailsClick(film)} className="film-row">
//           <Poster poster_path={film.poster_path} overview={film.overview} />
//           <div className="film-summary">
//             <h1>{film.title}</h1>
//             <p>{film.release_date.slice(0, 4)}</p>
//           </div>
//           <Faves />
//         </div>
//     );
//   }
// }
