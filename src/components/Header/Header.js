import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
 <Container>
   <Div1>
     <Link href="/">
        <a style= {{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
     </Link>
   </Div1>
   <Div2>
     <li>
       <Link href="#projects">
        <NavLink>Projects</NavLink>
       </Link>
     </li>
     <li>
       <Link href="#tech">
        <NavLink>Technologies</NavLink>
       </Link>
     </li>
     <li>
       <Link href="#about">
        <NavLink>About</NavLink>
       </Link>
     </li>
   </Div2>
   <Div3>
     <SocialIcons href="https://github.com/HustleCoding?tab=repositories">
        <AiFillGithub size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://www.linkedin.com/in/dobinciuc-florin-57a6121aa/">
        <AiFillLinkedin size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://www.youtube.com/channel/UCs1Td1RG2dR1VvRMuNqqK3Q">
        <AiFillYoutube size="3rem" />
     </SocialIcons>
   </Div3>
 </Container>
);

export default Header;
