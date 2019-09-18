import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Profile from "../components/Profile/Profile.jsx";
import Display from "../components/Display/Display.jsx";
import Footer from "../components/Footer/Footer.jsx";

import Work from "./Work/Work.jsx";
import FitHub from "./FitHub/FitHub.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Profile />
        <Display>
          <Switch>
            <Route exact path="/" render={() => <Work />} />
            <Route exact path="/fithub" render={() => <FitHub />} />
          </Switch>
          <Footer />
        </Display>
      </div>
    );
  }
}

export default withRouter(Home);
