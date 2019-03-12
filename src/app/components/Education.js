import * as React from 'react';
import styled from 'styled-components';
import Common from './Common';

const EducationContainer = styled.div`
  flex: 1 0 0;
  height: 100%;
  border-right: 1px solid #E0E7EE;
  padding: 10px 40px 10px 10px;
`;

const EducationSectionHeader = styled(Common.SectionHeader)`
  text-align: right;
`;

const EducationYear = styled(Common.ItemName)`
  text-align: right;
`;

const EducationDescription = styled(Common.ItemDescription)`
  text-align: right;
`;

class Education extends React.Component {
  render() {
    return (
      <EducationContainer>
        <EducationSectionHeader>EDUCATION</EducationSectionHeader>
        <Common.Item>
          <EducationYear>2006/2010</EducationYear>
          <EducationDescription>Amsterdam University of Applied Sciences (HBO) (Unfinished)</EducationDescription>
          <EducationDescription>computer science</EducationDescription>
        </Common.Item>
        <Common.Item>
          <EducationYear>2005/2006</EducationYear>
          <EducationDescription>Amsterdam University of Applied Sciences (HBO) (Unfinished)</EducationDescription>
          <EducationDescription>engineering of applied computer science</EducationDescription>
        </Common.Item>
        <Common.Item>
          <EducationYear>2004/2005</EducationYear>
          <EducationDescription>Application Developer (MBO)</EducationDescription>
        </Common.Item>
        <Common.Item>
          <EducationYear>2002/2004</EducationYear>
          <EducationDescription>System and network management (MBO)</EducationDescription>
        </Common.Item>
      </EducationContainer>
    )
  }
}

export default Education;
