import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import Logo from './components/logo.jsx';
import Menu from './components/menu.jsx';
import ContactForm from './components/contact_form.jsx';

//ReactDOM.render(<Menu />, document.getElementById('react_menu'));
ReactDOM.render(<Logo />, document.getElementById('react_logo'));
ReactDOM.render(<ContactForm />, document.getElementById('contact'));