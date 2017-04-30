'use strict';

import React from 'react';

require('styles//Header.css');
const data = [
  {source:'https://image.flaticon.com/icons/svg/214/214316.svg', alt:'email', class: 'social email', val: 'mario.vizcainos@gmail.com', id:1},
  {source:'https://image.flaticon.com/icons/svg/149/149004.svg', alt:'phone', class: 'social phone', val: '(+57) 3164293230', id:2},
  {source:'https://image.flaticon.com/icons/svg/174/174869.svg', alt:'skype', class: 'social skype', val: 'mario.vizcainos', id:3},
  {source:'https://image.flaticon.com/icons/svg/174/174869.svg', alt:'github', class: 'social github', val: 'mariovzc', id:4}
];
class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="row text-center">
            <div className="col-sm-4 basic-info text">
              <h3>MARIO VIZCAINO</h3>
              <h4>Barranquilla, Colombia</h4>
              <h4>Full-Stack Developer</h4>
            </div>
            <div className="col-sm-4">
              <img src="https://gravatar.com/avatar/67f1ef5b57b0581f1bd097c49d2888d3?s=512&d=https://codepen.io/assets/avatars/user-avatar-512x512-6e240cf350d2f1cc07c2bed234c3a3bb5f1b237023c204c782622e80d6b212ba.png" className="img-fluid profile-picture" alt="Responsive image " />
            </div>
            <div className="col-sm-4 text-right social-container">
              {data.map((social) =>
                <div key={social.id}  className={social.class}>
                  <b>{social.val}</b>
                  <img src={social.source} alt={social.alt} className="social-image" />
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
