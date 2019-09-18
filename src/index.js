import { hot } from "react-hot-loader";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "regenerator-runtime/runtime";

import Home from "./views/Home.jsx";

import "./styles/index.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="" render={() => <Home />} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
