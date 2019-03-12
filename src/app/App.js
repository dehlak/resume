import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Interests from './components/Interests';

const AppContainer = styled.div`
  width: 1000px;
  background: #FFF;
  padding: 10px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.06), 0px 6px 12px rgba(0, 0, 0, 0.04), 0px 24px 48px rgba(0, 0, 0, 0.06);
`;

const ResumeSection = styled.div`
  padding: 20px 0;
`;

const ResumeRow = styled.div`
  display: flex;
`;

const ContactRow = styled(ResumeRow)`
  height: 200px;
`;

const EducationExperienceRow = styled(ResumeRow)`
  height: 390px;
`;

const SkillsInterestsRow = styled(ResumeRow)`
  height: 710px;
`;

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <ResumeSection>
          <ContactRow>
            <About />
            <Contact />
          </ContactRow>
          <EducationExperienceRow>
            <Education />
            <Experience />
          </EducationExperienceRow>
          <SkillsInterestsRow>
            <Skills />
            <Interests />
          </SkillsInterestsRow>
        </ResumeSection>
      </AppContainer>
    );
  }
}

export default App;
