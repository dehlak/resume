import styled from 'styled-components';

const Bold = styled.span`
  font-weight: bold;
`;

const Item = styled.div`
  margin-bottom: 10px;
  &:last {
    margin-bottom: 0;
  }
`;

const ItemDescription = styled.p`
  font-size: 12px;
  margin: 5px 0;
`;

const ItemName = styled.h3`
  font-size: 15px;
  margin-bottom: 8px;
`;

const LeftContainer = styled.div`
  flex: 1 0 0;
  height: 100%;
  border-right: 1px solid #E0E7EE;
  padding: 10px 40px 10px 10px;
`;

const Paragraph = styled.p`
  font-size: 15px;
  color: #293845;
  padding: 0;
  margin: 4px 0;
`;

const RightContainer = styled.div`
  flex: 1 0 0;
  height: 100%;
  padding: 25px 10px 10px 40px;
`;

const SectionHeader = styled.h2`
  font-size: 20px;
  letter-spacing: 0.1em;
`;

export default {
  Bold,
  Item,
  ItemDescription,
  ItemName,
  LeftContainer,
  Paragraph,
  RightContainer,
  SectionHeader,
}