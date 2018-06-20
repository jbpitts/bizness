
import { Axis, Chart, Geom, Legend, Tooltip } from 'bizcharts';
import * as React from 'react';

import './App.css';

import { sampleData } from './data/SampleData';
import { SampleRow } from './data/SampleRow';

import logo from './logo.png';

interface IAppState {
    data?:SampleRow[];
}

// no properties so use any for now
class App extends React.Component<{}, IAppState> {
    private timerID:any;

    constructor(props:{}) {
        super(props);
        this.state = { data: sampleData.data };
    }

    public componentDidMount() {
        this.timerID = setInterval(
            () => this.updateData(),
            5000
        );
    }

    public componentWillUnmount() {
        clearInterval(this.timerID);
    }

    public updateData = () => {
        this.setState({
           data: sampleData.add()
        });
    }

  public render() {
      const data = this.state.data;
      if (!data) {
          return null;
      }
      const listOfDates = data.map((row) =>
          <p className="App-intro" key={row.key}>
              {row.month}, key: {row.key}, prop: {row.prop}, value: {row.value}, time: {row.time}
          </p>
      );

      // this is because of typescript error
      const adjust:any[] = [{type: 'dodge',marginRatio: 1/32}];

      const scale = {
          key: {
              alias: 'Key',
              max: 500,
              min: 0,
          },
          month: {
              type: 'cat'
          },
          prop: {
              type: 'cat'
          },
          time: {
              alias: 'Time',
              mask: 'MM:ss',
              // nice: false,
              tickCount: 10,
              type: 'time',


          },
          value: {
              alias: 'Hardware',
              max: 500,
              min: 0,
          }
      }

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chart Example</h1>
        </header>
          <Chart width={600} height={400} data={data} scale={scale} onGetG2Instance={(g2Chart)=> g2Chart /*this is needed for realtime update*/}>
              <Legend />
              <Axis />
              <Tooltip crosshairs={{type : "y"}}/>
              <Geom type="line" position="time*value" size={2} color={'prop'} shape="smooth" />

          </Chart>
          <Chart width={600} height={400} data={data} scale={scale} onGetG2Instance={(g2Chart)=> g2Chart /*this is needed for realtime update*/}>
              <Legend />
              <Axis />
              <Tooltip />
              <Geom type="interval" position="month*value" color="prop" adjust={adjust} />
              <Geom type="line" position="month*key" shape="smooth" color={ [ ' key ' , (key) => '#ff7f0e' ] } size={2} />
          </Chart>
          <Chart width={600} height={400} data={data} scale={scale} onGetG2Instance={(g2Chart)=> g2Chart /*this is needed for realtime update*/}>
              <Tooltip crosshairs={{type : "y"}} />
              <Axis />
              <Legend />
              <Geom type="area" position="month*value" color="prop" shape="smooth" />
              <Geom type="line" position="month*value" color="prop" shape="smooth"  size={2} />
          </Chart>
        {listOfDates}
      </div>
    );
  }
}

export default App;
