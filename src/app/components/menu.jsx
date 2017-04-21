import React from 'react';
var Menu = require('react-burger-menu').bubble;

//var Example = React.createClass({
export default class menu extends React.Component {
  render() {
    return (
      <Menu right customBurgerIcon={ <img src="https://image.flaticon.com/icons/png/512/52/52152.png" /> } customCrossIcon={ <img src="https://cdn2.iconfinder.com/data/icons/toolbar-roundline/512/delete-512.png" /> } >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="projects" className="menu-item" href="/projects">Projects</a>
        <a id="blog" className="menu-item" href="/blog">Blog</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    );
  }
}