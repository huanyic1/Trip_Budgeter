import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { data } from '../data/data'
import './AddMovie.css'
import { citydata } from '../data/citydata'

const AddMovie = () => {
    let navigate = useNavigate();

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    let [image, setImage] = useState('')
    const [city, setCity] = useState('')
    const [type, setType] = useState('')

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const genreHandler = (event) => {
        setGenre(event.target.value);
    }

    const imageHandler = (event) => {
        setImage(event.target.value);
        console.log(event.target.value);
    }

    const cityHandler = (event) => {
        setCity(event.target.value);
        console.log(event.target.value);
    }

    const typeHandler = (event) => {
        setType(event.target.value);
        console.log(event.target.value);
    }

    let addMovieHandler = (event) => {
        /*citydata.push({
            name: name,
            genre: genre,
            img: image
        })*/
        //DO NOT DELETE
        //this is to get the number from input and get the new average
        // console.log((citydata[0].living));
        // citydata[0].living = (citydata[0].living + parseInt(image))/2;
        // console.log((citydata[0].living)); 




        navigate("../trip", ({replace: true}));

    }



    return (
        <div className="form">

            <h1 className="title">Add Cost</h1>
            <label>Location</label>
            <div>
                <select onChange={cityHandler}>
                    <option value="None">Select</option>
                    <option value="NYC">New York City, NY</option>
                    <option value="BOS">Boston, MA</option>
                </select>
            </div>
            <label>Type</label>
            <div>
                <select onChange = {typeHandler}>
                    <option value="None">Select</option>
                    <option value="living">Living</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="transportation">Transportation</option>
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
