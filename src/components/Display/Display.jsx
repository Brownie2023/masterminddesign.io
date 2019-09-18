import React, { Component } from "react";

import "./Display.scss";
import Footer from "../Footer/Footer.jsx";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <div className="display">{this.props.children}</div>;
  }
}

export default Display;
