import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: #ffffff;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 20px;
`;

const SectionTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 18px;
  color: #61dafb;
`;

const SectionText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #c4c4c4;
`;

const SectionList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 14px;
  color: #c4c4c4;
`;

const ListItem = styled.li`
  margin: 5px 0;
`;

const SocialIcons = styled.div`
  a {
    color: #ffffff;
    margin: 0 10px;
    font-size: 20px;
    text-decoration: none;

    &:hover {
      color: #61dafb;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding: 10px 0;
  font-size: 14px;
  color: #c4c4c4;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <SectionTitle>About Us</SectionTitle>
          <SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vel enim varius lacinia.</SectionText>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Contact</SectionTitle>
          <SectionList>
            <ListItem>Email: info@example.com</ListItem>
            <ListItem>Phone: +123-456-7890</ListItem>
          </SectionList>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2024  Company. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
