import React, { Component } from 'react';



export default class Faves extends Component {
    state = {
        isFave: false
    }
    handleFavesClick = (e) =>{
        e.stopPropagation()
        this.setState((prevState) =>{return {isFave: !prevState.isFave}})
        console.log("Handling the faves")
    }
    render () {
        const action = this.state.isFave?'remove_from_queue':'add_to_queue'
        return (
            <div className={`film-row-fave ${action}`} onClick={this.handleFavesClick} >
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}