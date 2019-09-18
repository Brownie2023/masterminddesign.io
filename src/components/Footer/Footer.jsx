import React, { Component } from "react";

import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="footer">
        <h3>Contact Me</h3>
        <div className="row justify-content-center">
          <div className="col-md-4 col-md-offset-1">
            <p className="lead">
              Thank you for visiting my site. If you would like to get in tough
              with me, please fill out the form or message me directly at
              josh@masterminddesign.io
            </p>
          </div>
          <div className="col-md-4 offset-md-1">
            <form>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Enter message"
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="robot"
                />
                <label className="form-check-label" for="robot">
                  I am not a robot
                </label>
              </div>
              <button type="submit" className="btn btn-danger float-right">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
