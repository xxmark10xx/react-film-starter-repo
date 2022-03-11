import React, { Component } from 'react';


export default class Poster extends Component {
    render() {
        let posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.poster_path}`
        return(
                <img src={posterUrl} alt=''/>
        )
    }
}