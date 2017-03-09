import React, {Component} from 'react';
import TimeSeries from './TimeSeries'
import { connect } from 'react-redux'; 
import { BUCA } from '../m/BUCA'
import { chartData, resetChartData } from '../../actions/index'

import { Paper } from 'material-ui'

/*
mock = BUCA
mock2 = ALAB
mock3 = 
ANGT
*/

import styles from '../../css/chart.css';

class TimeSeriesContainer extends Component {

    componentWillUpdate() {
        this.props.resetChartData()
    }

    render() {
        this.props.chartData(this.props.data)
        return (
            <div>
            <Paper style={{padding: 5}}><h3>{this.props.sitename}</h3></Paper>
            <div className={styles.timeSeriesContainer}>
                <TimeSeries data={this.props.data} name='east' styles={styles}/>
                <TimeSeries data={this.props.data} name='north' styles={styles}/>
                <TimeSeries data={this.props.data} name='up' styles={styles}/>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {  
  return {
    //none yet
  };
}

export default connect(mapStateToProps, { chartData, resetChartData })(TimeSeriesContainer);