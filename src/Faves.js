import React, { useState } from 'react';

export default function Faves() {
    const [isFave, setIsFave] = useState(false)
    const action = isFave?'remove_from_queue':'add_to_queue'
    return( 
        <div className={`film-row-fave ${action}`} onClick={() => setIsFave(!isFave)} >
            <p className="material-icons">add_to_queue</p>
        </div>
    )
}


// export default class Faves extends Component {
//     state = {
//         isFave: false
//     }
//     handleFavesClick = (e) =>{
//         e.stopPropagation()
//         this.setState((prevState) =>{return {isFave: !prevState.isFave}})
//         console.log("Handling the faves")
//     }
//     render () {
//         const action = this.state.isFave?'remove_from_queue':'add_to_queue'
//         return (
//             <div className={`film-row-fave ${action}`} onClick={this.handleFavesClick} >
//                 <p className="material-icons">add_to_queue</p>
//             </div>
//         )
//     }
// }