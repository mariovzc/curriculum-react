'use strict';

import React from 'react';

require('styles//Experience.css');
const experiences = [
  {id: 1, position: 'Full-Stack Developer', company: 'GhettoSoft', location: 'Barranquilla, Colombia', used: 'Ruby on Rails, Jquery, Bootstrap, Foundation, HTML, CSS, JavaScript and Trello.', date: 'March 2015 - June 2015'},
  {id: 2, position: 'Web Developer', company: 'Saludtec SAS', location: 'Barranquilla, Colombia', used: 'Phonegap, Jquery, VanillaJS, VanillaCSS, HTML, CSS ,JavaScript, Ruby on Rails, APIs REST.', date: 'August 2015 - Current'},
  {id: 3, position: 'iOS Developer', company: 'Saludtec SAS', location: 'Barranquilla, Colombia', used: 'Xcode, Objective-C, cocoapods, Parse (RIP), C++(few)', date: 'August 2015 - Current'}
  ];

class ExperienceComponent extends React.Component {
  render() {
    return (
      <div>
        <h4>EXPERIENCE</h4>
        {experiences.map((exp) =>
          <div key={exp.id} className="experiences">
            <h5>{exp.position}</h5>
            <h6>{exp.company},{exp.location}</h6>
            <p>{exp.date}</p>
            <p>{exp.used}</p>
          </div>
        )}
      </div>
    );
  }
}

ExperienceComponent.displayName = 'ExperienceComponent';

// Uncomment properties you need
// ExperienceComponent.propTypes = {};
// ExperienceComponent.defaultProps = {};

export default ExperienceComponent;
