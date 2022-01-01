import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Products from "./Product/Products";
import Home from "./Home/Home";
import history from './history';
import TableComp from "./TableComp";
import Logout from "./logout";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Dashboard" component={Products} />
                    <Route path="/Table" component={TableComp}/>
                    <Route path='/' component={Logout}/>
                </Switch>
            </Router>
        )
    }
}
