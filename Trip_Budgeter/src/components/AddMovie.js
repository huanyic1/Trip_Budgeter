import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { data } from '../data/data'
import './AddMovie.css'
import { citydata } from '../data/citydata'
import { userInput } from '../data/userInput'



const AddMovie = () => {
    let navigate = useNavigate();
    let cityValue= "";
    let typeValue= "";
    let cost= 0;

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
        cost = parseInt(event.target.value);
        console.log(event.target.value);
    }

    const cityHandler = (event) => {
        setCity(event.target.value);
        cityValue = event.target.value;
        console.log(cityValue);
    }

    const typeHandler = (event) => {
        setType(event.target.value);
        typeValue = event.target.value;
        //setTypeValue(event.target.value);
        console.log(typeValue);
    }

    function setTypeValue(value){
        typeValue = value;
        console.log(typeValue);
        return typeValue;
    }
    function getTypeValue(){
        typeValue = typeValue;
        console.log(typeValue);
        return typeValue;
    }

    const addMovieHandler = (event) => {
        /*citydata.push({
            name: name,
            genre: genre,
            img: image
        })*/

        // const cityv = obj => obj.value === cityValue;

        // console.log(cityv);
        // console.log(cityValue);

        // function validate(cityVal){
        //     if (cityVal == Object.value) {
        //         // citydata[citydata.indexOf(Object)].typeVal = (citydata[citydata.indexOf(Object)].typeValue + parseInt(image))/2 ;
        //         // console.log(citydata[citydata.indexOf(Object)].typeValue);
        //     }
        //     // if(cityVal == Element){
        //     //     console.log("Hello world");
                

        //     // }
        // }

        // citydata.forEach(validate(cityValue, typeValue));
        //console.log(type);
        //console.log(city);
        //console.log(typeHandler);
        let type2 ={type};
        for(let i = 0; i<citydata.length; i++){
            //console.log(citydata[i].city);
            console.log(city);
            if(citydata[i].value == city){
                //   updateValue(i)
                // get entertainment type -- "valueForEnt"
                // if type == entertainment{
                // citydata[i].entertainment = citdayta.entetainment + parsetine

                if (type == 'living') {
                    citydata[i].living = (citydata[i].living + parseInt(image))/2 ;
                    console.log(`living ${type}`);
                    console.log(citydata[i].living);
                }
                if (type == 'food') {
                    citydata[i].food = (citydata[i].food + parseInt(image))/2 ;
                    console.log(`food ${type}`);
                    console.log(citydata[i].food);
                }
                if (type == 'entertainment') {
                    citydata[i].entertainment = (citydata[i].entertainment + parseInt(image))/2 ;
                    console.log(`entertainment ${type}`);
                    console.log(citydata[i].entertainment);
                }
                if (type == 'transportation') {
                    citydata[i].transportation = (citydata[i].transportation + parseInt(image))/2 ;
                    console.log(`transportation ${type}`);
                    console.log(citydata[i].transportation);
                }

                
                //console.log(i);
                
                // console.log(parseInt(image));
                // console.log(type);

            }
        }

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
