import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World! <br />
        I am Jeremiah Martin
      </SectionTitle>
      <SectionText>
      Welcome to my portfolio
      </SectionText>
      "To give anything less than your best, is to sacrifice the gift"
      <br></br>
                        -Steve Prefontaine
  
    </LeftSection>
  </Section>
</>
);

export default Hero;