import React, { Component } from "react"; 
import { Router, Switch, Route } from "react-router-dom";  

import history from "./history"; 
import CommissionType from "./commissionType"; 
import Home from "./Home"; 
import FormPage from "./FormPage"
import COMP251 from "./COMP 251/COMP251"


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/CommissionType" exact component={CommissionType} />
                    <Route path="/FormPage" exact component={FormPage} />
                    <Route path="/COMP251" exact component={COMP251} />
                </Switch>
            </Router>
        ); 
    }; 
}


