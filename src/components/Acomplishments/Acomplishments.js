import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Completed Coding Dojo Python Bootcamp'},
  { number: 40, text: 'Projects of Multiple Technologies', },
  { number: 1, text: 'Open Source Contributer', },
  
];

const Acomplishments = () => (
  <Section>
  <SectionTitle>Personal Achievements</SectionTitle>
  <Boxes>
    {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{`${card.number}+`}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
  <SectionDivider/>
</Section>
);

export default Acomplishments;
