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



const CustomTooltip = ({prices}) => {
        
          return (
            <div className="custom-tooltip">
       
              <p className="desc">${prices[0].value}</p>
            </div>
          );

      };
const tripdata = [
    {name: "Living", value : 2000, fill: '#0088FE' },
    {name: "Food", value : 500, fill: '#00C49F'},
    {name: "Entertainment", value : 1000, fill: '#FFBB28'}
]; 
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const Trip = () => {
    return (
        <div>
            <h1>Cost Breakdown</h1>
            <div className = "PieChart">
            <div> 
            <ResponsiveContainer width={1000} height={600} className="text-center">
            <PieChart width={1000} height={600}>
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
           
            </div>
            
            
        </div>
        
      );
    
}

export default Trip
