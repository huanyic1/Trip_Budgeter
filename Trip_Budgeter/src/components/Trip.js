import React from 'react'
import './Trip.css'
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
    Cell,
    Bar
} from "recharts";
import { citydata } from '../data/citydata';
import { userInput } from '../data/userInput'

const Trip = () => {
    var living_price;
    var living_price;
    var food_price;
    var fun_price;
    var transport_price;

    let tripdata;






    function updateInfo() {
        var city = userInput[0].cityValue;
        var num_days = userInput[0].numberOfDays;
        console.log(userInput[0].numberOfDays);
        console.log("Hello");
        if (city == "NYC") {
            living_price = num_days * citydata[0]["living"]
            food_price = 3 * num_days * citydata[0]["food"]
            fun_price = num_days * citydata[0]["entertainment"]
            transport_price = num_days * citydata[0]["transportation"]
        }
        else if (city == "BOS") {
            living_price = num_days * citydata[1]["living"]
            food_price = 3 * num_days * citydata[1]["food"]
            fun_price = num_days * citydata[1]["entertainment"]
            transport_price = num_days * citydata[1]["transportation"]
        }
    }
    updateInfo();





    function addTripData() {
        tripdata = [
            { name: "Living", value: living_price, fill: 'RED' },
            { name: "Food", value: food_price, fill: 'Blue' },
            { name: "Entertainment", value: fun_price, fill: 'Green' },
            { name: "Transport", value: transport_price, fill: '#FFBB28' }
        ];
        return tripdata;
    }

    addTripData();


    

    const getIntroOfPage = (label) => {
        if (label === 'Living') {
          return "Page A is about men's clothing";
        }
        if (label === 'Food') {
          return "Page B is about women's dress";
        }
        if (label === 'Entertainment') {
          return "Page C is about women's bag";
        }
        if (label === 'Transport') {
          return 'Page D is about household goods';
        }
        
        return label;
      };
      
      const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label} : ${payload[0].value}`}</p>
              <p className="intro">{getIntroOfPage(label)}</p>
              <p className="desc">Anything you want can be displayed here.</p>
            </div>
          );
        }
      
        return null;
      };
    const getCityNum = (city) =>{
        if (city==="NYC"){
            return 0
        }
        else{
            return 1
        }
    }
    
    console.log(tripdata);
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    //const Trip = () => {
    return (
        <div>
            <h1>Expected Cost Breakdown</h1>

            <div className="PieChart">
                <div>
                    <ResponsiveContainer width={1200} height={500} className="text-center">
                        <PieChart width={1000} height={500}>
                            <Pie
                                style={{ marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0 }}
                                dataKey="value"
                                isAnimationActive={false}
                                data={addTripData()}
                                // cx={500}
                                // cy={300}
                                outerRadius={200}
                                fill="#8884d8"
                                label
                            />

                            <Tooltip />
                            {/* <Tooltip content={<CustomTooltip />} /> */}
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                {/* <p>Hotels = <script type="text/javascript">

            document.write(num_days) 
                </script>
                  * 
                <script type="text/javascript">
                    document.write(citydata[1]["avghotelcost"])
                    </script> </p> */}

            </div>

        <p className='movieName'>For {userInput[0].numberOfDays} days in {userInput[0].cityValue}, expect to spend: </p>
        <p className='subtext'>{userInput[0].numberOfDays} x ${citydata[getCityNum(userInput[0].cityValue)]["living"]} on housing </p>
        <p className='subtext'>3 x {userInput[0].numberOfDays} x ${citydata[getCityNum(userInput[0].cityValue)]["food"]} on food </p>
        <p className='subtext'>{userInput[0].numberOfDays} x ${citydata[getCityNum(userInput[0].cityValue)]["entertainment"]} on fun </p>
        <p className='subtext'>{userInput[0].numberOfDays} x ${citydata[getCityNum(userInput[0].cityValue)]["transportation"]} on transportation</p>
        <p className='total'>Total: ${userInput[0].numberOfDays * 
        (citydata[getCityNum(userInput[0].cityValue)]["living"] +
        3 * citydata[getCityNum(userInput[0].cityValue)]["food"] + 
        citydata[getCityNum(userInput[0].cityValue)]["entertainment"] + 
        citydata[getCityNum(userInput[0].cityValue)]["transportation"]
                )}</p>
        </div>

    );

}

export default Trip
