import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { data } from '../data/data'
import './AddMovie.css'

const AddMovie = () => {
    let navigate = useNavigate();

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [image, setImage] = useState('')

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const genreHandler = (event) => {
        setGenre(event.target.value);
    }

    const imageHandler = (event) => {
        setImage(event.target.value);
    }

    const addMovieHandler = (event) => {
        data.push({
            name: name,
            genre: genre,
            img: image
        })
        navigate("../", ({replace: true}));
    }



    return (
        <div className="form">

            <h1 className="title">Add Cost</h1>
            <label>Location</label>
            <div>
                <select>
                    <option value="None">Select</option>
                    <option value="NYC">New York City</option>
                    <option value="BOS">Boston</option>
                </select>
            </div>
            <label>Type</label>
            <div>
                <select>
                    <option value="None">Select</option>
                    <option value="living">Living</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                </select>
            </div>
            <label>Name</label>
            <input onChange={genreHandler}></input>
            <label>Amount Spent</label>
            <input onChange={imageHandler}></input>
            <button onClick={addMovieHandler}>Add Cost</button>
        </div>
    )
}

export default AddMovie
