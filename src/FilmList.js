import React, { Component } from 'react';
import FilmRow from './FilmRow';

export default class FilmList extends Component {
    render() {
        const allFilms = this.props.films.map((film, index) => {
            return (
                <FilmRow
                    title={film.title}
                    posterPath={film.poster_path}

                />
            )
            })
        return (
            <>
                <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    {allFilms}
                </div>
            </>
        )
    }
}