'use strict';

import React from 'react';

require('styles//Education.css');
const educations = [
  {id: 1, title: 'System Engineer', school: 'Politécnico de la Costa', location: 'Barranquilla, Colombia', date: 'March 2010 - March 2015'},
  {id: 2, title: 'Computer Security Specialist', school: 'Corporacion Universitaria Americana', location: 'Barranquilla, Colombia', date: 'September 2016 - Current'},
  {id: 3, title: 'Front-End Developer', school: 'FreeCodeCamp', location: 'Barranquilla, Colombia', date: 'April 2016 - Current'}
];
class EducationComponent extends React.Component {
  render() {
    return (
      <div>
        <h4>Education</h4>
        {educations.map((education) =>
          <div key = {educations.id} className="educations">
            <h5><b>{education.title}</b> - {education.school}</h5>
            <h6>{education.location}</h6>
            <p>{education.date}.</p>
          </div>
        )}
      </div>
    );
  }
}

EducationComponent.displayName = 'EducationComponent';

// Uncomment properties you need
// EducationComponent.propTypes = {};
// EducationComponent.defaultProps = {};

export default EducationComponent;
