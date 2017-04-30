'use strict';

import React from 'react';

require('styles//About.css');

class AboutComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="text-center about">
          Design By <a href="https://co.linkedin.com/in/melissa-navarro-79802966" target="_blank">Melissa Navarro</a>
        </div>
      </div>
    );
  }
}

AboutComponent.displayName = 'AboutComponent';

// Uncomment properties you need
// AboutComponent.propTypes = {};
// AboutComponent.defaultProps = {};

export default AboutComponent;
