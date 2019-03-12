import * as React from 'react';
import styled from 'styled-components';
import Common from './Common';

const SkillsSectionHeader = styled(Common.SectionHeader)`
  text-align: right;
`;

const SkillItem = styled.div``;

const SkillName = styled(Common.ItemName)`
  text-align: right;
`;

const SkillBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const SkillBar = styled.div`
  font-size: 12px;
  margin: 5px 0;
  height: 10px;
  width: 300px;
  border: 1px solid #E0E7EE;
  background: #FFF;
`;

const SkillValue = styled.div`
  height: 100%;
  background: #18AE9F;
  width: ${ props => props.value }%;
`;

class Skills extends React.Component {
  render() {
    return (
      <Common.LeftContainer>
        <SkillsSectionHeader>SKILLS</SkillsSectionHeader>
        <SkillItem>
          <SkillName>Javascript (ES6)</SkillName>
          <SkillBarWrapper>
            <SkillBar>
              <SkillValue value={90} />
            </SkillBar>
          </SkillBarWrapper>
        </SkillItem>
        <SkillItem>
          <SkillName>React</SkillName>
          <SkillBarWrapper>
            <SkillBar>
              <SkillValue value={80} />
            </SkillBar>
          </SkillBarWrapper>
        </SkillItem>
        <SkillItem>
          <SkillName>VueJS</SkillName>
          <SkillBarWrapper>
            <SkillBar>
              <SkillValue value={50} />
            </SkillBar>
          </SkillBarWrapper>
        </SkillItem>
        <SkillItem>
          <SkillName>Angular</SkillName>
          <SkillBarWrapper>
            <SkillBar>
              <SkillValue value={75} />
            </SkillBar>
          </SkillBarWrapper>
        </SkillItem>
        <SkillItem>
          <SkillName>HTML</SkillName>
          <SkillBarWrapper>
            <SkillBar>
              <SkillValue value={90} />
            </SkillBar>
          </SkillBarWrapper>
        </SkillItem>
        <SkillItem>
          <SkillName>CSS</SkillName>
          <SkillBarWrapper>
            <SkillBar>
              <SkillValue value={90} />
            </SkillBar>
          </SkillBarWrapper>
        </SkillItem>
        <SkillItem>
          <SkillName>SQL</SkillName>
          <SkillBarWrapper>
            <SkillBar>
              <SkillValue value={70} />
            </SkillBar>
          </SkillBarWrapper>
        </SkillItem>
        <SkillItem>
          <SkillName>Git</SkillName>
          <SkillBarWrapper>
            <SkillBar>
              <SkillValue value={90} />
            </SkillBar>
          </SkillBarWrapper>
        </SkillItem>
        <SkillItem>
          <SkillName>Debugging</SkillName>
          <SkillBarWrapper>
            <SkillBar>
              <SkillValue value={90} />
            </SkillBar>
          </SkillBarWrapper>
        </SkillItem>
        <SkillItem>
          <SkillName>Elixir</SkillName>
          <SkillBarWrapper>
            <SkillBar>
              <SkillValue value={3} />
            </SkillBar>
          </SkillBarWrapper>
        </SkillItem>
      </Common.LeftContainer>
    )
  }
}

export default Skills;
