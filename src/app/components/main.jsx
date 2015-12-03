/** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';
const Slider = require('material-ui/lib/slider');

const Main = React.createClass({
  render() {
    return (
      <div>
        <Slider name="slider1" />
      </div>
    );
  },
});

export default Main;
