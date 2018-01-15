import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Intro from './Intro';
import RegularForm from './RegularForm';
import SliderForm from './SliderForm';

import NavBar from './NavBar';

const padding = { margin: '8rem 2rem 0', padding: '1rem', border: '2px solid steelblue' };
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="*" component={NavBar} />
          <div style={padding}>
            <Route path="/" exact component={Intro} />
            <Route path="/regular" exact component={RegularForm} />
            <Route path="/slider-form" component={SliderForm} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}