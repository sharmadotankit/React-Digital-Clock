import {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
     date: new Date()
    }
  }


componentDidMount() {
  this.interval = setInterval(() => this.setState({ date: new Date()}), 999);
}
componentWillUnmount() {
  clearInterval(this.interval);
}



  render(){
    const presentDate = this.state.date;

    const day = document.getElementById(presentDate.getDay());
      
    day.style.color='red';
    
    return (
      <div className="App">
      <h1 id = "clock-title"> Digital Clock</h1>
        <div className="mainContainer">

          <div className="dateContainer">
              <div className="dateTitleContainer">
                <p>Date</p>
                <p>Month</p>
                <p>Year</p>
              </div>

            <div className="dateValueContainer">
              <h1>{ presentDate.getDate()}</h1>

              <h1>/</h1>
              <h1>{ ( (presentDate.getMonth()+1) < 10 ? "0"+(presentDate.getMonth()+1).toString() :(presentDate.getMonth()+1) )}</h1>
              <h1>/</h1>
              <h1>{presentDate.getFullYear()}</h1>
            </div>
              

          </div>

          <div className="timeContainer">

            <div className="timeTitleContainer">
              <p>Hour</p>
              <p>Minute</p>
              <p>Second</p>
            </div>

            <div className="timeValueContainer">
              <h1> {presentDate.getHours()} </h1>
              <h1>:</h1>
              <h1>{ ( (presentDate.getMinutes()+1) < 10 ? "0"+(presentDate.getMinutes()+1).toString() :(presentDate.getMinutes()+1) ) }</h1>
              <h1>:</h1>
              <h1>{ ( (presentDate.getSeconds()+1) < 10 ? "0"+(presentDate.getSeconds()+1).toString() :(presentDate.getSeconds()+1) ) }</h1>
            </div>

          </div>


          <div className="dayContainer">

            <p id="0"> Sun</p>
            <p id="1"> Mon</p>
            <p id="2"> Tue</p>
            <p id="3"> Wed</p>
            <p id="4"> Thur</p>
            <p id="5"> Fri</p>
            <p id="6"> Sat</p>
                  
           </div>

          {/*
            <div className="bottomContainer">

            <div className="tempContainer">
            Temp
            </div>

            <div className="ampmContainer">
            AM 
            PM
            </div>

          </div>
          */
          }
        </div>
      </div>
      );
  }
}

export default App;
