import * as React from 'react';
import styled from 'styled-components';
import Common from './Common';

const AboutHeader = styled(Common.SectionHeader)`
  text-align: right;
`;

const AboutParagraph = styled(Common.Paragraph)`
  text-align: right;
`;

const Residence = styled(AboutParagraph)`
  margin-top: 20px;
`;

class About extends React.Component {
  render() {
    return (
      <Common.LeftContainer>
        <AboutHeader>HI</AboutHeader>
        <AboutParagraph>I'm <Common.Bold>Martijn</Common.Bold></AboutParagraph>
        <AboutParagraph>fullstack developer</AboutParagraph>
        <Residence>Netherlands</Residence>
      </Common.LeftContainer>
    )
  }
}

export default About;
