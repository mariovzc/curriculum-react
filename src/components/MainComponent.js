'use strict';

import React from 'react';

require('styles//Main.css');

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <main>
          <div className="row text-center">
            <br/>
            <div className="col-sm-6 experience">
            </div>
            <div className="col-sm-6 skills">
            </div>
          </div>
        </main>
      </div>
    );
  }
}

MainComponent.displayName = 'MainComponent';

// Uncomment properties you need
// MainComponent.propTypes = {};
// MainComponent.defaultProps = {};

export default MainComponent;
