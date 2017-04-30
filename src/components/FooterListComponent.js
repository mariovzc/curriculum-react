'use strict';

import React from 'react';

require('styles//FooterList.css');

const  data = [
  {name: 'Database Design in SQL', school: 'SENA', date: 'April 2012', id:1},
  {name: 'Fundamentals Computer Security', school: 'Politécnico de la Costa Atlántica', date: 'January 2013',id:2},
  {name: 'TSP/PSP Fundamentals', school: 'Politécnico de la Costa Atlántica', date: 'November 2014', id:3},
  {name: 'Mobile and Web Development', school: 'Mintic', date: 'February 2015', id:4},
  {name: 'Android & Ror Development', school: 'Politécnico de la Costa Atlántica', date: 'January 2015', id:5},
  {name: 'Basic Of Scrum', school: 'Udemy', date: 'May 2016', id:6}
];

class FooterListComponent extends React.Component {
  render() {
    return (
      <div className="row">
        {data.map((item) =>
          <div key={item.id} className="col-sm-6">
            <div className="certificates">
              <h5><b>{item.name}</b></h5>
              <h6>{item.school}</h6>
              <small>{item.date}</small>
            </div>
          </div>
        )}
      </div>
    );
  }
}

FooterListComponent.displayName = 'FooterListComponent';

// Uncomment properties you need
// FooterListComponent.propTypes = {};
// FooterListComponent.defaultProps = {};

export default FooterListComponent;
