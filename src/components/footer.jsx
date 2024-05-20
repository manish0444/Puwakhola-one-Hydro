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
          <SectionText>Harnessing the power of renewable energy to drive sustainable development</SectionText>
        </FooterSection> 
        <FooterSection>
          <SectionTitle>Address</SectionTitle>
          <SectionList>
            <ListItem>Durga bhawan, Anamnagar, Kathmandu</ListItem>
          
          </SectionList>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Contact</SectionTitle>
          <SectionList> Email:
          <ListItem>
        <a href="mailto:puwakholahydropower@gmail.com">puwakholahydropower@gmail.com</a>
      </ListItem>
      <ListItem>
        <a href="mailto:Malunhydro@gmail.com">Malunhydro@gmail.com</a>
      </ListItem>Phone:
            <ListItem><a href="tel:014102710">01-4102710</a></ListItem>
          </SectionList>
        </FooterSection>
       
        <FooterSection>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
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
