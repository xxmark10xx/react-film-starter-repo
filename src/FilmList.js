import React, { useState } from "react"
import FilmRow from "./FilmRow"


export default function FilmList({films}) {
    const [filter, setFilter] = useState(true)
 
    

    const allFilms = films.map((film, index) => {
        return (
            <FilmRow
                key={index}
                films = {film}
            />
        )
    })
    return (
    <>
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div onClick={() => setFilter(!filter)} className={`film-list-filter ${filter ? 'is-active' : ''}`}>
                    ALL
                    <span className="section-count">{films.length}</span>
                </div>
                <div onClick={() => setFilter(!filter)} className={`film-list-filter ${!filter ? 'is-active' : ''}`}>
                    FAVES
                    <span className="section-count">0</span>
                </div>
            </div>
            {allFilms}
        </div>
    </>
    )
}


//  import React, { Component } from 'react';
//  import FilmRow from './FilmRow';


//  export default class FilmList extends Component {

//      state ={
//          filter: 'all'
//      }

//      handleFilterClick = (filter) => {
//          console.log("A Filter was Clicked")
//          this.setState({
//              filter: filter
//          })
        
//      }

//      render() {
//          const allFilms = this.props.films.map((film, index) => {
//              return (
//                      <FilmRow
//                          key={index}
//                          film = {film}
//                      />
//              )
//              })
//          return (
//              <>
//                  <div className="film-list">
//                      <h1 className="section-title">FILMS</h1>
//                      <div className="film-list-filters">
//                          <div onClick={() => this.handleFilterClick('all')} className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}>
//                               ALL
//                               <span className="section-count">{this.props.films.length}</span>
//                          </div>
//                          <div onClick={() => this.handleFilterClick('faves')} className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}>
//                              FAVES
//                              <span className="section-count">0</span>
//                          </div>
//                      </div>
//                      {allFilms}
//                  </div>
//              </>
//          )
//      }
//  }