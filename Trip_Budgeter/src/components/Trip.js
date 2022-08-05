import React from 'react'
import './Trip.css'
import { PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
    Cell,
    Bar} from "recharts"; 
import { citydata } from '../data/citydata';


const CustomTooltip = ({prices}) => {
        
          return (
            <div className="custom-tooltip">
       
              <p className="desc">${prices[0].value}</p>
            </div>
          );

      };


var city = "nyc" //read in later
var num_days = 3 //pull in later
if (city == "nyc"){
    var living_price = num_days * citydata[0]["living"]
    var food_price = 3*num_days * citydata[0]["food"]
    var fun_price = num_days * citydata[0]["entertainment"]
    var transport_price = num_days *citydata[0]["transportation"]
}
else if (city == "bos"){
    var living_price = num_days * citydata[1]["living"]
    var food_price = 3*num_days * citydata[1]["food"]
    var fun_price = num_days * citydata[1]["entertainment"]
    var transport_price = num_days *citydata[1]["transportation"]
}

// var living_price = 0
// var num_liv = 0
// for (let i = 0; i<expenses.length; i+=1){
//     if (expenses[i]["type"] == "living"){
//         num_liv+=1
//         living_price += expenses[i]["cost"]
//     }

// }



const tripdata = [
    {name: "Living", value : living_price, fill: 'RED' },
    {name: "Food", value : food_price, fill: 'Blue'},
    {name: "Entertainment", value : fun_price, fill: 'Green'},
    {name: "Transport", value : transport_price, fill: '#FFBB28'}
]; 
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const Trip = () => {
    return (
        <div>
            <h1>Expected Cost Breakdown</h1>
            <div className = "PieChart">
            <div> 
            <ResponsiveContainer width={1000} height={500} className="text-center">
            <PieChart width={1000} height={500}>
                    <Pie
                    style={{marginLeft:'auto',marginRight:'auto',left:0,right:0}}
                    dataKey="value"
                    isAnimationActive={false}
                    data={tripdata}
                    // cx={500}
                    // cy={300}
                    outerRadius={200}
                    fill="#8884d8"
                    label 
                    />
                    
                    <Tooltip/>
                    {/* <Tooltip content={<CustomTooltip prices ={tripdata}/>} /> */}
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
            
            
        </div>
        
      );
    
}

export default Trip
