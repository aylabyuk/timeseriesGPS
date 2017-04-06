import React, {Component} from 'react';
import TimeSeriesContainer from './timeseries/TimeSeriesContainer';
import { connect } from 'react-redux';
import { Link } from 'react-router';

//test datas
import { NMLM as NMLM1, NMSM as NMSM1, NOMC as NOMC1, NOMD as NOMD1, NOMF as NOMF1, NOMI as NOMI1, SOLH as SOLH1, SOLL as SOLL1, TAGB as TAGB1 } from './m/combine20042016';
import { NMLM as NMLM2, NMSM as NMSM2, NOMC as NOMC2, NOMD as NOMD2, NOMF as NOMF2, NOMI as NOMI2, SOLH as SOLH2, SOLL as SOLL2, TAGB as TAGB2 } from './m/combine20142017';
import { NMLM as NMLM3, NMSM as NMSM3, NOMC as NOMC3, NOMD as NOMD3, NOMF as NOMF3, NOMI as NOMI3, SOLH as SOLH3, SOLL as SOLL3, TAGB as TAGB3 } from './m/combine20152017';
import { PSUR_1MONTH_BEFORE } from './m/PSUR-1MONTH_BEFORE';
import { PSUR_10DAYS_BEFORE } from './m/PSUR-10DAYS_BEFORE';

//ui
import { Button } from 'semantic-ui-react';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';

class TestDashboard extends Component {
    state = { 
        open: true,
        data: NMLM1,
        sitename: 'NMLM'
    }

    toggleDrawer = () => this.setState({ open: !this.state.open })

    changeData = (e) => { 
        switch (e.target.value) {
            case 'NMLM1': this.setState({data: NMLM1, sitename: "NMLM 2004-2016"}); break;
            case 'NMSM1': this.setState({data: NMSM1, sitename: "NMSM 2004-2016"}); break;
            case 'NOMC1': this.setState({data: NOMC1, sitename: "NOMC 2004-2016"}); break;
            case 'NOMD1': this.setState({data: NOMD1, sitename: "NOMD 2004-2016"}); break;
            case 'NOMF1': this.setState({data: NOMF1, sitename: "NOMF 2004-2016"}); break;
            case 'NOMI1': this.setState({data: NOMI1, sitename: "NOMI 2004-2016"}); break;
            case 'SOLH1': this.setState({data: SOLH1, sitename: "SOLH 2004-2016"}); break;
            case 'SOLL1': this.setState({data: SOLL1, sitename: "SOLL 2004-2016"}); break;
            case 'TAGB1': this.setState({data: TAGB1, sitename: "TAGB 2004-2016"}); break;

            case 'NMLM2': this.setState({data: NMLM2, sitename: "NMLM 2004-2017"}); break;
            case 'NMSM2': this.setState({data: NMSM2, sitename: "NMSM 2004-2017"}); break;
            case 'NOMC2': this.setState({data: NOMC2, sitename: "NOMC 2004-2017"}); break;
            case 'NOMD2': this.setState({data: NOMD2, sitename: "NOMD 2004-2017"}); break;
            case 'NOMF2': this.setState({data: NOMF2, sitename: "NOMF 2004-2017"}); break;
            case 'NOMI2': this.setState({data: NOMI2, sitename: "NOMI 2004-2017"}); break;
            case 'SOLH2': this.setState({data: SOLH2, sitename: "SOLH 2004-2017"}); break;
            case 'SOLL2': this.setState({data: SOLL2, sitename: "SOLL 2004-2017"}); break;
            case 'TAGB2': this.setState({data: TAGB2, sitename: "TAGB 2004-2017"}); break;

            case 'NMLM3': this.setState({data: NMLM3, sitename: "NMLM 2015-2017"}); break;
            case 'NMSM3': this.setState({data: NMSM3, sitename: "NMSM 2015-2017"}); break;
            case 'NOMC3': this.setState({data: NOMC3, sitename: "NOMC 2015-2017"}); break;
            case 'NOMD3': this.setState({data: NOMD3, sitename: "NOMD 2015-2017"}); break;
            case 'NOMF3': this.setState({data: NOMF3, sitename: "NOMF 2015-2017"}); break;
            case 'NOMI3': this.setState({data: NOMI3, sitename: "NOMI 2015-2017"}); break;
            case 'SOLH3': this.setState({data: SOLH3, sitename: "SOLH 2015-2017"}); break;
            case 'SOLL3': this.setState({data: SOLL3, sitename: "SOLL 2015-2017"}); break;
            case 'TAGB3': this.setState({data: TAGB3, sitename: "TAGB 2015-2017"}); break;

            case 'PSUR_1MONTH_BEFORE' : this.setState({data: PSUR_1MONTH_BEFORE, sitename: "PSUR detail-1 month before and 10 days after"}); break;
            case 'PSUR_10DAYS_BEFORE' : this.setState({data: PSUR_10DAYS_BEFORE, sitename: "PSUR detail-10 days before and 10 days after"}); break;

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

                <div>PSUR DATA</div><br />
                <Button onClick={this.changeData} value='PSUR_1MONTH_BEFORE'>PSUR_1MONTH_BEFORE</Button><br/>
                <Button onClick={this.changeData} value='PSUR_10DAYS_BEFORE'>PSUR_10DAYS_BEFORE</Button><br/>

                {/*<Link to='/logsheet'>Log Sheet</Link>*/}
                <Drawer 
                    width={1308} 
                    openSecondary={true} 
                    open={true} 
                    style={{ backgroundColor: "slategray"}}>
                    <TimeSeriesContainer ref='timeseriescontainer' data={this.state.data} sitename={this.state.sitename}/>
                </Drawer>
            </div>
        );
    }
}

export default TestDashboard;