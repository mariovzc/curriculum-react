require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <HeaderComponent/>
          <hr/>
          <MainComponent/>
          <hr/>
          <FooterComponent/>
        </div>        
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
