import React, {useState} from 'react'
import Movie from './Movie';
import Trip from "./Trip"; 
import {data} from '../data/data'
import './PickMovie.css'
import { PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
    Bar} from "recharts"; 
    import { userInput } from '../data/userInput'


    

const PickMovie = () => {
    const [randomMovie, setRandomMovie] = useState({});
    const [picked, setPicked] = useState(false)
    const [days, setDays] = useState('')

    let dayCount;
    const [cityValue, setCityValue] = useState('')
    
    const  moviePicker = () => {
        const random = data[Math.floor(Math.random() * data.length)];
        console.log(randomMovie)
        setRandomMovie(random);
        setPicked(true);
    }
    const dayHandler = (event) => {
        setDays(event.target.value);
        //dayCount = event.target.value;
        //console.log(dayCount);
    }
    //console.log(days);

    const cityInputHandler = (event) => {
        setCityValue(event.target.value);
        //cityValue = event.target.value;
        //console.log(cityValue);
    }


    const displayLocation = () =>{
        //console.log(<Trip/>)
        setPicked(true)
        userInput[0].numberOfDays = days;
        userInput[0].cityValue = cityValue;
        //console.log(userInput[0].numberOfDays);
        //console.log(days);
        
    }

   
    const pickAgain = () => {
        setPicked(false)
    }

    
    
    
        return (
           <div>
           <h1 className="title">Let's Travel!</h1>
           <label>Location</label>
           <div>
               <select onChange={cityInputHandler}>
                   <option value="None">Select</option>
                   <option value="NYC">New York City</option>
                   <option value="BOS">Boston</option>
               </select>
           </div>
           <div>
           <label>Number of Days Staying</label>
           </div>
           <div>
           <input onChange={dayHandler}></input>
           </div>
           
           {picked && 
           <div className ="picked">
               <div>
               <Trip/>
               </div>
               <div><button className="pickButton" onClick={pickAgain} >Travel to Different Location</button> </div>

               
           </div>}
           {!picked && <button onClick={displayLocation}>Let's Go!</button>}
           
           
       </div>

        );
    
    
}

export default PickMovie
