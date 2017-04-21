import React from 'react'
import ReactDOM from 'react-dom';
import { render } from 'react-dom'

import Logo from './components/logo.jsx'
import Menu from './components/menu.jsx'

/*
render (
  <div>
    <Logo />
  </div>,
  document.getElementById('react_logo')
)

render (
    <div>
        <Menu />
    </div>,
    document.getElementById('react_menu')
)
*/

ReactDOM.render(<Menu />, document.getElementById('react_menu'));
ReactDOM.render(<Logo />, document.getElementById('react_logo'));