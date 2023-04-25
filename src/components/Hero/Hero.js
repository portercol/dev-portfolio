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
        websites. Below are a few sample projects - please view my github
        account to see all of my work.
      </SectionText>
      <Button onClick={() => (window.location = "/#projects")}>
        <span>Sample stuff &nbsp;</span>
        <span style={{ paddingTop: "5px" }}>
          <FaArrowDown />
        </span>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
