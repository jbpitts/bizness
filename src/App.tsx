
import { Axis, Chart, Geom, Legend, Tooltip } from 'bizcharts';
import * as React from 'react';

import './App.css';

import { sampleData } from './data/SampleData';

import logo from './logo.png';

class App extends React.Component {

  public render() {
      const listOfDates = sampleData.data.map((row) =>
          <p className="App-intro" key={row.key}>
              {row.month}, key: {row.key}, prop: {row.prop}, value: {row.value}
          </p>
      );

      const adjust:any[] = [{type: 'dodge',marginRatio: 1/32}];

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chart Example</h1>
        </header>
          <Chart width={600} height={400} data={sampleData.data}>
              <Axis name="month" />
              <Axis name="value" />
              <Tooltip />
              <Geom type="interval" position="month*value" color="prop" adjust={adjust} />

          </Chart>
          <Chart width={600} height={400} data={sampleData.data}>
              <Tooltip crosshairs={{type : "y"}} />
              <Axis />
              <Legend />
              <Geom type="area" position="month*value" color="prop" shape='smooth' />
              <Geom type="line" position="month*value" color="prop" shape='smooth'  size={2} />
          </Chart>
          <Chart width={600} height={400} data={sampleData.data}>
              <Legend />
              <Axis name="month" />
              <Axis name="value" />
              <Tooltip crosshairs={{type : "y"}}/>
              <Geom type="line" position="month*value" size={2} color={'prop'} />
              <Geom type='point' position="month*value" size={4} shape={'circle'} color={'prop'} style={{ stroke: '#fff', lineWidth: 1}} />
          </Chart>
        {listOfDates}
      </div>
    );
  }
}

export default App;
