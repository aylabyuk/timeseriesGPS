import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as d3 from "d3";
import  Chart  from 'd3act'
import MyCustomChart from './MyCustomChart'

//ui
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 5,
  padding: 6,
  width: 1200,
  height: 280,
};

class TimeSeries extends Component {
    render() {

        let { name, computed, data, styles } = this.props
        let dd = [], date, yVal, i = 0
        
        data.map((d) => {
            date = d.date
            switch (name) {
                case 'east': yVal = d.east; break;
                case 'north': yVal = d.north; break;
                case 'up': yVal = d.up; break;
            }
            let line = computed ? computed.line[name][i] : 0
            dd.push({date, yVal, name, line })
            i++
        })

        return (
            <Paper style={style}>
                <p>{name} |
                    velocity: {computed ? Math.round((computed.velocity[name][1] * 10) * 100) / 100  + ' mm/yr': 'calculating'} | 
                    error: +- {computed ? Math.round((computed.std_error[name][0] * 10) * 100) / 100 + ' mm' : 'calculating'}
                </p>
                <FlatButton id='resetBtn' className={name} label='reset' primary={true} />
                <Chart
                    id='chart'
                    type={"custom"}
                    customChart={MyCustomChart}
                    data={dd}
                    styles={styles}
                />
            </Paper>
        );
    }
}

function mapStateToProps(state) {  
  return {
    computed: state.plot.computed
  };
}

export default connect(mapStateToProps)(TimeSeries);