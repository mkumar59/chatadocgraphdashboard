import React from 'react';
import Chart from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class Test extends React.Component {
    constructor(props) {
        super(props)
          this.state = {
            months: [],
            Total_Appointments:[]

          }
          }
     
      componentDidMount(){
        //Get all chart details
        axios.get('https://chatadocuat.com/mobileappointment/appointmentGraph').then(res => 
        {
        //Storing users detail in state array object
        console.log(res.data.data
            )
            let dd=[];
            let month1=[];
            res.data.data.slice(0,10).map((item)=>{
               
                dd.push(item.Total_Appointments);
                month1.push(item.Date)
                this.setState({months:month1});
                console.log(item.Date)
                this.setState({Total_Appointments:dd});
            }) 
            console.log(this.state.Total_Appointments)
        
           }); 
           
       
        
        }
  render() {
    return (
      <div>
        {/* <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        /> */}
         <Bar
                data={{
                    labels: this.state.months,
                    datasets: [
                      {
                        label: 'Total Appointment',
                        backgroundColor: '#007A56',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: this.state.Total_Appointments
                      }
                    ]
                  }}
                options={{
                    title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
                />
      </div>
    );
  }
}