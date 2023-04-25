import React from "react";
import { FaArrowDown } from "react-icons/fa";
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
        As a Web Developer I aim to build unique, well-designed, user-friendly
        websites.
      </SectionText>
      <Button onClick={() => (window.location = "/#projects")}>
        <span>See my work &nbsp;</span>
        <span style={{ paddingTop: "5px" }}>
          <FaArrowDown />
        </span>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
