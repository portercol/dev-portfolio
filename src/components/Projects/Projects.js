import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { projects } from "../../constants/constants";

const Projects = () => (
  <Section noPadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, app, code }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          {/* <TitleContent style={{ paddingTop: "10px" }}>Tech Stack</TitleContent> */}
          <TagList>
            {tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </TagList>
          <UtilityList>
            <ExternalLinks href={code}>Code</ExternalLinks>
            <ExternalLinks href={app}>App</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
