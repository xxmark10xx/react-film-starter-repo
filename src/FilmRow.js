import React, { Component } from 'react';

export default class FilmRow extends Component {
    render() {
        let posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.posterPath}`
        return(
            <div className='film-row'>
                <h1>{this.props.title}</h1> 
                <img src={posterUrl} alt=''/>
            </div>
        )
    }
}