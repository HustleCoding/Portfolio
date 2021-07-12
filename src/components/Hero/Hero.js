import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Front-End Developer. Currently front-end student at @Wantsome. Bright critical thinker with proven talent for learning quickly in results-oriented environment. 
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/dobinciuc-florin-57a6121aa/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
