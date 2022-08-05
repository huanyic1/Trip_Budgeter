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


var CityVal;


const PickMovie = () => {
    const [randomMovie, setRandomMovie] = useState({});
    const [picked, setPicked] = useState(false)


    const [days, setDays] = useState('')

    let dayCount;
    const [cityValue, setCityValue] = useState('')

    const [city, setCity] = useState('');

    
    const dayHandler = (event) => {
        setDays(event.target.value);
        //dayCount = event.target.value;
        //console.log(dayCount);
    }
    //console.log(days);


    
    const cityInputHandler = (event) => {
      setCity(event.target.value);
            CityVal = event.target.value;
            console.log(event.target.value);
        setCityValue(event.target.value);
        //cityValue = event.target.value;
        //console.log(cityValue);
    }

    const moviePicker = () => {
        const city = obj => obj.value === CityVal;
        console.log(CityVal);
        //console.log(randomMovie)
        setRandomMovie(data[data.findIndex(city)]);
        setPicked(true);
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
           <label className='input_label'>Location</label>
           <div>

               <select className='drop_down' onChange={cityInputHandler}>

                   <option value="None">Select</option>
                   <option value="NYC">New York City</option>
                   <option value="BOS">Boston</option>
               </select>
           </div>
           <br></br>
           <div>
           <label className='input_label'>Number of Days Staying</label>
           </div>
           <div>

           <input className='input_box' onChange={dayHandler}></input>

           </div>
           
           {picked && 
           <div className ="picked">
               <div class="table">
            <div class="pic">
                <Movie name={randomMovie.name} image={randomMovie.img} genre={randomMovie.genre}/>
            </div>
            <div class="pie">
                < Trip/>
            </div>
            </div>
            <div>
            <button className="pickButton" onClick={pickAgain} >Travel to Different Location</button> </div>
                        
           </div>}
           {!picked && <button onClick={moviePicker}>Let's Go!</button>}
           
           
       </div>

        );
    
    
}

export default PickMovie

