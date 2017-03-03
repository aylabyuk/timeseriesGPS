import React, {Component} from 'react';
import TimeSeriesContainer from './timeseries/TimeSeriesContainer'
import { connect } from 'react-redux'
import { Link } from 'react-router'

//test datas
import { NMLM as NMLM1, NMSM as NMSM1, NOMC as NOMC1, NOMD as NOMD1, NOMF as NOMF1, NOMI as NOMI1, SOLH as SOLH1, SOLL as SOLL1, TAGB as TAGB1 } from './m/combine20042016'
import { NMLM as NMLM2, NMSM as NMSM2, NOMC as NOMC2, NOMD as NOMD2, NOMF as NOMF2, NOMI as NOMI2, SOLH as SOLH2, SOLL as SOLL2, TAGB as TAGB2 } from './m/combine20142017'
import { NMLM as NMLM3, NMSM as NMSM3, NOMC as NOMC3, NOMD as NOMD3, NOMF as NOMF3, NOMI as NOMI3, SOLH as SOLH3, SOLL as SOLL3, TAGB as TAGB3 } from './m/combine20152017'

//ui
import { Button } from 'semantic-ui-react'
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';

class TestDashboard extends Component {
    state = { 
        open: false,
        data: NMLM1
    }

    toggleDrawer = () => this.setState({ open: !this.state.open })

    changeData = (e) => { 
        switch (e.target.value) {
            case 'NMLM1': this.setState({data: NMLM1}); break;
            case 'NMSM1': this.setState({data: NMSM1}); break;
            case 'NOMC1': this.setState({data: NOMC1}); break;
            case 'NOMD1': this.setState({data: NOMD1}); break;
            case 'NOMF1': this.setState({data: NOMF1}); break;
            case 'NOMI1': this.setState({data: NOMI1}); break;
            case 'SOLH1': this.setState({data: SOLH1}); break;
            case 'SOLL1': this.setState({data: SOLL1}); break;
            case 'TAGB1': this.setState({data: TAGB1}); break;

            case 'NMLM2': this.setState({data: NMLM2}); break;
            case 'NMSM2': this.setState({data: NMSM2}); break;
            case 'NOMC2': this.setState({data: NOMC2}); break;
            case 'NOMD2': this.setState({data: NOMD2}); break;
            case 'NOMF2': this.setState({data: NOMF2}); break;
            case 'NOMI2': this.setState({data: NOMI2}); break;
            case 'SOLH2': this.setState({data: SOLH2}); break;
            case 'SOLL2': this.setState({data: SOLL2}); break;
            case 'TAGB2': this.setState({data: TAGB2}); break;

            case 'NMLM3': this.setState({data: NMLM3}); break;
            case 'NMSM3': this.setState({data: NMSM3}); break;
            case 'NOMC3': this.setState({data: NOMC3}); break;
            case 'NOMD3': this.setState({data: NOMD3}); break;
            case 'NOMF3': this.setState({data: NOMF3}); break;
            case 'NOMI3': this.setState({data: NOMI3}); break;
            case 'SOLH3': this.setState({data: SOLH3}); break;
            case 'SOLL3': this.setState({data: SOLL3}); break;
            case 'TAGB3': this.setState({data: TAGB3}); break;

        }
    }

    render() {
        return (
            <div>
                <FlatButton onClick={this.toggleDrawer}>Toggle Visibility</FlatButton><br/>
                <div>2004-2016</div><br/>
                <Button onClick={this.changeData} value='NMLM1'>NMLM</Button><br/>
                <Button onClick={this.changeData} value='NMSM1'>NMSM</Button><br/>
                <Button onClick={this.changeData} value='NOMC1'>NOMC</Button><br/>
                <Button onClick={this.changeData} value='NOMD1'>NOMD</Button><br/>
                <Button onClick={this.changeData} value='NOMF1'>NOMF</Button><br/>
                <Button onClick={this.changeData} value='NOMI1'>NOMI</Button><br/>
                <Button onClick={this.changeData} value='SOLH1'>SOLH</Button><br/>
                <Button onClick={this.changeData} value='SOLL1'>SOLL</Button><br/>
                <Button onClick={this.changeData} value='TAGB1'>TAGB</Button><br/>
                
                <div>2004-2017</div><br/>
                <Button onClick={this.changeData} value='NMLM2'>NMLM</Button><br/>
                <Button onClick={this.changeData} value='NMSM2'>NMSM</Button><br/>
                <Button onClick={this.changeData} value='NOMC2'>NOMC</Button><br/>
                <Button onClick={this.changeData} value='NOMD2'>NOMD</Button><br/>
                <Button onClick={this.changeData} value='NOMF2'>NOMF</Button><br/>
                <Button onClick={this.changeData} value='NOMI2'>NOMI</Button><br/>
                <Button onClick={this.changeData} value='SOLH2'>SOLH</Button><br/>
                <Button onClick={this.changeData} value='SOLL2'>SOLL</Button><br/>
                <Button onClick={this.changeData} value='TAGB2'>TAGB</Button><br/>

                <div>2015-2017</div><br/>
                <Button onClick={this.changeData} value='NMLM3'>NMLM</Button><br/>
                <Button onClick={this.changeData} value='NMSM3'>NMSM</Button><br/>
                <Button onClick={this.changeData} value='NOMC3'>NOMC</Button><br/>
                <Button onClick={this.changeData} value='NOMD3'>NOMD</Button><br/>
                <Button onClick={this.changeData} value='NOMF3'>NOMF</Button><br/>
                <Button onClick={this.changeData} value='NOMI3'>NOMI</Button><br/>
                <Button onClick={this.changeData} value='SOLH3'>SOLH</Button><br/>
                <Button onClick={this.changeData} value='SOLL3'>SOLL</Button><br/>
                <Button onClick={this.changeData} value='TAGB3'>TAGB</Button><br/>

                <Link to='/logsheet'>Log Sheet</Link>
                <Drawer 
                    width={1500} 
                    openSecondary={true} 
                    open={this.state.open} 
                    style={{ backgroundColor: "slategray"}}>
                    <TimeSeriesContainer data={this.state.data}/>
                </Drawer>
            </div>
        );
    }
}

export default TestDashboard;