import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter, Link } from "react-router-dom";

import "./FitHub.scss";

class FitHub extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="fithub">
        <Link to="/">
          <i className="material-icons back-arrow">arrow_back_ios</i>
        </Link>
        <h1>FitHub</h1>
        <div className="synopsis">
          <p className="lead">More details to come</p>
        </div>
      </div>
    );
  }
}

export default withRouter(FitHub);
