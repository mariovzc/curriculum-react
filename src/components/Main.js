require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <hr/>
        <MainComponent/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
