import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Collin. <br />I develop cool websites.
      </SectionTitle>
      <SectionText>
        Using various technologies I develop custom built websites and those
        built with a CMS.
      </SectionText>
      <Button onClick={() => (window.location = "/#projects")}>
        Take a look.
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
