import * as React from 'react';
import styled from 'styled-components';
import Common from './Common';

const ExperienceSectionHeader = styled(Common.SectionHeader)`
  margin-top: 0;
`;

class Experience extends React.Component {
  render() {
    return (
      <Common.RightContainer>
        <ExperienceSectionHeader>EXPERIENCE</ExperienceSectionHeader>
        <Common.Item>
          <Common.ItemName>2010/present</Common.ItemName>
          <Common.ItemDescription><Common.Bold>Qelp</Common.Bold></Common.ItemDescription>
          <Common.ItemDescription>
            Started out building a custom framework (mostly using jQuery) for quickly scaffolding out applications for our customers. After a few years I transitioned to a fullstack
            position building a backend in NodeJS and a frontend using AngularJS 1. The last 10 months I have been working on a new CMS build in React with Typescript and a NodeJS
            backend utilizing GraphQL as a data fetching layer.
          </Common.ItemDescription>
        </Common.Item>
        <Common.Item>
          <Common.ItemName>2009/2010</Common.ItemName>
          <Common.ItemDescription><Common.Bold>JobsRepublic</Common.Bold></Common.ItemDescription>
          <Common.ItemDescription>
            An internship where I build a javascript application for the government.
          </Common.ItemDescription>
        </Common.Item>
        <Common.Item>
          <Common.ItemName>2008/2009</Common.ItemName>
          <Common.ItemDescription><Common.Bold>Holder</Common.Bold></Common.ItemDescription>
          <Common.ItemDescription>
            Build several customer facing websites using Ruby on Rails and helped building some functions in an earlier version of BettyBlocks.
          </Common.ItemDescription>
        </Common.Item>
      </Common.RightContainer>
    )
  }
}

export default Experience;
