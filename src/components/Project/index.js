import React from "react";
import {
  ProjectWrapper,
  ProjectContainer,
  HeaderContent,
  ProjectHeader,
  CodeDemoContainer,
  CodeDemoLink,
  ContentBody,
  Screenshot,
  Screenshots,
  Info,
  Heading,
  Paragraph,
  List,
  ListItem,
  Moodboard,
  Palette,
} from "./ProjectElements";
import { HiCode, HiExternalLink } from "react-icons/hi";

const Project = ({
  title,
  github,
  demo,
  images,
  moodboard,
  colourPalette,
  description,
  technologies,
  features,
}) => {
  return (
    <>
      <ProjectWrapper>
        <ProjectContainer>
          <HeaderContent>
            <ProjectHeader>{title}</ProjectHeader>
            <CodeDemoContainer>
              <CodeDemoLink href={github} target="_blank">
                <HiCode />
              </CodeDemoLink>
              <CodeDemoLink href={demo} target="_blank">
                <HiExternalLink />
              </CodeDemoLink>
            </CodeDemoContainer>
          </HeaderContent>
          <ContentBody>
            <Screenshots>
              {images.map((image, index) => {
                return <Screenshot key={index} src={image} />;
              })}
            </Screenshots>
            <Info>
              <Heading>description</Heading>
              <Paragraph>{description}</Paragraph>
              <Heading>technologies</Heading>
              <List>
                {technologies.map((name, index) => {
                  return <ListItem key={index}>{name}</ListItem>;
                })}
              </List>
              <Heading>features</Heading>
              {features.map((feature, index) => {
                return <Paragraph key={index}>{feature}</Paragraph>;
              })}
              {moodboard !== "" && colourPalette !== "" && (
                <Heading>moodboard & colour palette</Heading>
              )}
              {moodboard !== "" && colourPalette !== "" && (
                <Moodboard src={moodboard} />
              )}
              {moodboard !== "" && colourPalette !== "" && (
                <Palette src={colourPalette} />
              )}
            </Info>
          </ContentBody>
        </ProjectContainer>
      </ProjectWrapper>
    </>
  );
};

export default Project;
