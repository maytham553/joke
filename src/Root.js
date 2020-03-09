import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import TrendingPage from "./Pages/TrendingPage/TrendingPage";
import TemplatesPage from "./Pages/Templates/Templates";
import Find from "./Pages/Search/SearchPage";
import Upload from "./Pages/Upload/Upload";


export default class Root extends React.Component {

    render() {
        return <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/trending' exact component={() => <TrendingPage Path="/trending" />} />
            <Route path='/template' exact component={TemplatesPage} />
            <Route path='/search' exact component={Find} />
            <Route path='/upload' exact component={Upload} />
            <Route component={() => <h1>404 NOT FOUND</h1>} />
        </Switch>
    }

}