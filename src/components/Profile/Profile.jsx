import React, { Component } from "react";

import "./Profile.scss";
import icon from "../../images/logo_icon.png";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="profile">
        <div className="profile-image">
          <img src={icon} />
        </div>
        <div className="username">
          <h4>@Fr0nk3snt33n</h4>
          <p className="lead">- It's pronounced Fronkensteen -</p>
        </div>
        <div className="userbio"></div>
        <div className="about">
          <span>
            <i className="fas fa-blog"></i>
            <a href="https://blog.masterminddesign.io" target="_blank">
              blog.masterminddesign.io
            </a>
          </span>
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <a>Castle Rock, CO</a>
          </span>
          <span>
            <i className="fas fa-user-tie"></i>
            <a>Available for hire</a>
          </span>
          <div className="socials">
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-github"></i>
            </span>
            <span>
              <i className="fab fa-linkedin"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
