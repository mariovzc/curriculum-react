require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import HeaderComponent from './HeaderComponent';

class AppComponent extends React.Component {
  render() {
    return (
        <HeaderComponent/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
