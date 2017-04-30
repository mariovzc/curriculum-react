'use strict';

import React from 'react';
import FooterListComponent from './FooterListComponent';

require('styles//Footer.css');

class FooterComponent extends React.Component {
  render() {
    return (
      <div>
        <footer className="text-center">
          <h4>CERTIFICATES</h4>
            <FooterListComponent/>
        </footer>
      </div>
    );
  }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
