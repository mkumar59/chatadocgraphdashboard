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
            res.data.data.slice(0,29).map((item)=>{
               
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
          <div className='container'>
          <div className='row'>
          <div className='col-md-3'>
            <div className='totalbg dashboardcard'>
              <h4>Total Appointments</h4>
              <p>1200</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='completeappointmebg dashboardcard'>
                <h4>Completed Appointment</h4>
                <p>1200</p>
            </div>
           
          </div>
          <div className='col-md-3'>
            <div className='rescheduleappointmebg dashboardcard'>
                <h4>Reschedule Appointment</h4>
                <p>1200</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='cancelappointmebg dashboardcard'>
                <h4>Cancelled Appointment</h4>
                <p>1200</p>
            </div>
          </div>
          </div>
          
        </div>
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