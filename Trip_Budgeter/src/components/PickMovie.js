import React, {useState} from 'react'
import Movie from './Movie';
import {data} from '../data/data'
import './PickMovie.css'

var CityVal;


const PickMovie = () => {
    const [randomMovie, setRandomMovie] = useState({});
    const [picked, setPicked] = useState(false)
    const [city, setCity] = useState('');

    const cityHandler = (event) => {
        setCity(event.target.value);
        CityVal = event.target.value;
        console.log(event.target.value);
    }

    const  moviePicker = () => {
        const city = obj => obj.value === CityVal;
        console.log(CityVal);
        //console.log(randomMovie)
        setRandomMovie(data[data.findIndex(city)]);
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
                <select onChange={cityHandler}>
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
