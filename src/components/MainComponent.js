'use strict';

import React from 'react';
import ExperienceComponent from './ExperienceComponent';
import EducationComponent from './EducationComponent';
import SkillsComponent from './SkillsComponent';

require('styles//Main.css');

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <main>
          <div className="row text-center">
            <br/>
            <div className="col-sm-6 experience">
              <ExperienceComponent/>
              <EducationComponent/>
            </div>
            <div className="col-sm-6 skills">
              <SkillsComponent/>
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
