import React from 'react'
import './Trip.css'

const Movie = ({name, genre, image}) => {
    return (
        <div className="movie">
            <img src={image}></img>
            <p className="movieName">{name}</p>
            <p className="movieGenre">{genre}</p>
        </div>
    )
}

export default Movie
