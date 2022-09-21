import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


const Dashboard=()=>{
    let lb=['Jun', 'Jul', 'Aug','Sept'];
    let completedDate=[5, 0, 4,5]
    return(
        <div>
               <Bar
  datasetIdKey='id'
  data={{
    labels: lb,
    datasets: [
      
      {
        backgroundColor:'green',
        id: 19,
        label: 'Complated',
        data: completedDate,
        // borderWidth: 5,
        barPercentage:.1,
        categoryPercentage:0.4
      },
    //  
      {
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
        ],
        id: 31,
        label: 'Approved',
        
        data: [3, 2, 1],
        barPercentage:.1,
        categoryPercentage:1
        
      },
      {
            backgroundColor:'yellow',
            id: 21,
            label: 'rejected',
            data: [3, 2, 9],
            // borderWidth: 5,
            barPercentage:.1,
            
          }
      
     
    ],
  
    
  }}
  

/>
        </div>
    )
}

export default Dashboard;