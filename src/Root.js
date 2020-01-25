import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import TrendingPage from "./Pages/TrendingPage/TrendingPage";


export default class Root extends React.Component {

    render() {
        return <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/trending' exact component={() => <TrendingPage />} />
            <Route path='/template' exact component={() => <div>TEMPLATE PAGE</div>} />
            <Route path='/search' exact component={() => <div>SEARCH PAGE</div>} />
            <Route path='/upload' exact component={() => <div>UPLOAD PAGE</div>} />
            <Route component={() => <h1>404 NOT FOUND</h1>} />
        </Switch>
    }

}