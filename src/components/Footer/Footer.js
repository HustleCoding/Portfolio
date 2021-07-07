import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0749641796">0749641796</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:f.dobinciuc7@gmail.com">f.dobinciuc7@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>It’s not about impressing people and getting them to hire you. It’s about getting a conversation started.</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/HustleCoding?tab=repositories">
        <AiFillGithub size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://www.linkedin.com/in/dobinciuc-florin-57a6121aa/">
        <AiFillLinkedin size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://www.youtube.com/channel/UCs1Td1RG2dR1VvRMuNqqK3Q">
        <AiFillYoutube size="3rem" />
     </SocialIcons>
     </SocialContainer>
    </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
