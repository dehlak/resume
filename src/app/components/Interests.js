import * as React from 'react';
import styled from 'styled-components';
import Common from './Common';

const Interest = styled.p`
  font-size: 15px;
  margin: 3px 0;
`;

const ExperienceSectionHeader = styled(Common.SectionHeader)`
  margin-top: 0;
`;

class Interests extends React.Component {
  render() {
    return (
      <Common.RightContainer>
        <ExperienceSectionHeader>INTERESTS</ExperienceSectionHeader>
        <Interest>Coding/</Interest>
        <Interest>Gaming/</Interest>
        <Interest>Carp Fishing/</Interest>
        <Interest>Music/</Interest>
        <Interest>Film/</Interest>
        <Interest>Formula 1/</Interest>
      </Common.RightContainer>
    )
  }
}

export default Interests;
