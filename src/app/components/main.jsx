/** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';
const Slider = require('material-ui/lib/slider');

const Main = React.createClass({
  render() {
    return (
      <div className="row">
	      <div className="col s12 center white-text"><h1>Pay Only for what you use</h1></div>
	      <div className="col s10" id="slider">
	      	<Slider name="slider1" />
	      </div>
	      <div className="col s2 center white-text vertical-center"><h4 id="sliderValue">10M</h4></div>
      </div>
    );
  },
});

export default Main;
