import * as React from 'react';
import styled from 'styled-components';

import profile from '../../assets/profile.jpg';

const HeaderContainer = styled.div`
  line-height: 60px;
  width: 100%;
`;

const Name = styled.h1`
  font-size: 30px;
  width: 100%;
  letter-spacing: 0.1em;
  display: flex;
`;

const FirstName = styled.span`
  flex: 1;
  text-align: right;
`;

const LastName = styled.span`
  flex: 1;
`;

const ProfileImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 100%;
  margin: 0 35px;
  vertical-align: middle;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Name>
          <FirstName>MARTIJN</FirstName> <ProfileImage src={profile} /> <LastName>JANSEN</LastName>
        </Name>
      </HeaderContainer>
    )
  }
}

export default Header;
