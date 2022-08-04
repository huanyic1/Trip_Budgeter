import React, {useState} from 'react'
import Movie from './Movie';
import {data} from '../data/data'
import './PickMovie.css'

const PickMovie = () => {
    const [randomMovie, setRandomMovie] = useState({});
    const [picked, setPicked] = useState(false)

    const  moviePicker = () => {
        const random = data[Math.floor(Math.random() * data.length)];
        console.log(randomMovie)
        setRandomMovie(random);
        setPicked(true);
    }

    const pickAgain = () => {
        setPicked(false)
    }
    return (

        <div>
            <h1 className="title">Let's Travel!</h1>
            <label>Location</label>
            <div>
                <select>
                    <option value="None">Select</option>
                    <option value="NYC">New York City</option>
                    <option value="BOS">Boston</option>
                </select>
            </div>
            <div>
            <label>Number of Days Staying</label>
            </div>
            <div>
            <input></input>
            </div>
            
            {picked && 
            <div className ="picked">
                <div></div>
                <Movie name={randomMovie.name} image={randomMovie.img} genre={randomMovie.genre}/>
                <button className="pickButton" onClick={pickAgain} >Pick Again</button>
            </div>}
            {!picked && <button onClick={moviePicker}>Let's Go!</button>}
            
            
        </div>
    )
}

export default PickMovie
