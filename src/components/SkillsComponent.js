'use strict';

import React from 'react';

require('styles//Skills.css');
const red_bar = 'progress progress-height red-sub-bg';
const red_sub = 'progress-bar red-bg progress-height';

const blue_bar = 'progress progress-height blue-sub-bg';
const blue_sub = 'progress-bar blue-bg progress-height';

const skills = [
  {name:'Ruby on Rails', class:red_bar, percent: {width: 60 + '%'}, id: 1, subClass: red_sub},
  {name:'Objective-C', class:blue_bar, percent:{width: 80 +'%'}, id: 2, subClass: blue_sub},
  {name:'HTML/HTML5', class:red_bar, percent:{width: 90 +'%'}, id: 3, subClass: red_sub},
  {name:'CSS', class:blue_bar, percent:{width: 70 +'%'}, id: 4, subClass: blue_sub},
  {name:'JavaScript', class:red_bar, percent:{width: 80 +'%'}, id: 5, subClass: red_sub},
  {name:'Swift', class:blue_bar, percent:{width: 70 +'%'}, id: 6, subClass: blue_sub},
  {name:'C++', class:red_bar, percent:{width: 40 +'%'}, id: 7, subClass: red_sub},
  {name:'JQuery', class:blue_bar, percent:{width: 70 +'%'}, id: 8, subClass: blue_sub},
  {name:'Angular', class:red_bar, percent:{width: 30 +'%'}, id: 9, subClass: red_sub},
  {name:'React', class:blue_bar, percent:{width: 40 +'%'}, id: 10, subClass: blue_sub},
  {name:'Git', class:red_bar, percent:{width: 80 +'%'}, id: 11, subClass: red_sub},
  {name:'PHP', class:blue_bar, percent:{width: 60 +'%'}, id: 12, subClass: blue_sub}
];
class SkillsComponent extends React.Component {
  render() {
    return (
      <div>
        <h4>SKILLS & COMPETENCES</h4>
        <br/>
        {skills.map((skill) =>
          <div key= {skill.id} className="skill-container">
            <h6>{skill.name}</h6>
            <div className={skill.class}>
              <div className={skill.subClass} role="progressbar" style={skill.percent} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

SkillsComponent.displayName = 'SkillsComponent';

// Uncomment properties you need
// SkillsComponent.propTypes = {};
// SkillsComponent.defaultProps = {};

export default SkillsComponent;
