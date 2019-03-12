import * as React from 'react';
import styled from 'styled-components';
import Common from './Common';

const ContactInformationWrapper = styled.div`
  display: flex;
`;

const ContactIcon = styled.div`
  width: 75px;
  height: 75px;
  border: 1px solid #18AE9F;
  border-radius: 100%;
  text-align: center;
  line-height: 70px;
  > i {
    font-size: 35px;
    color: #18AE9F;
    vertical-align: middle;
  }
`;

const ContactInformation = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const ContactSectionHeader = styled(Common.SectionHeader)`
  margin-top: 0;
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  margin-top: 20px;
`;

const SocialIcon = styled.i`
  color: #FFF;
  background: #18AE9F;
  border-radius: 100%;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 20px;
`;

const Facebook = styled(SocialIcon)`
  margin-left: 5px;
`;

class Contact extends React.Component {
  render() {
    return (
      <Common.RightContainer>
        <ContactInformationWrapper>
          <ContactIcon><i className="far fa-address-book"></i></ContactIcon>
          <ContactInformation>
          <ContactSectionHeader>CONTACT</ContactSectionHeader>
            <Common.Paragraph>dehlak@gmail.com</Common.Paragraph>
            <Common.Paragraph>+31642483112</Common.Paragraph>
          </ContactInformation>
        </ContactInformationWrapper>
        <SocialIcons>
          <a href="https://www.linkedin.com/in/martijn-jansen-7b0218a/"><SocialIcon className="fab fa-linkedin-in"></SocialIcon></a>
          <a href="https://www.facebook.com/dehlak"><Facebook className="fab fa-facebook-f"></Facebook></a>
        </SocialIcons>
      </Common.RightContainer>
    )
  }
}

export default Contact;
