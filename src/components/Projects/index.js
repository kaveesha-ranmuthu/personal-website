import React from "react";
import projectTitle from "../../images/projects.png";
import {
  ProjectName,
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsHeader,
  ProjectsList,
  ListItem,
  Icon,
} from "./ProjectsElements";
import { CgWebsite } from "react-icons/cg";
import { BiMusic } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { FaMagic } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <ProjectsWrapper>
        <ProjectsContainer>
          <ProjectsHeader src={projectTitle} />
          <ProjectsList>
            <ListItem>
              <Icon>
                <CgWebsite />
              </Icon>
              <ProjectName to="/projects/personal-website">
                personal website
              </ProjectName>
            </ListItem>
            <ListItem>
              <Icon>
                <BiMusic />
              </Icon>
              <ProjectName to="/projects/streamlist">streamlist</ProjectName>
            </ListItem>
            <ListItem>
              <Icon>
                <BsGraphUp />
              </Icon>
              <ProjectName to="/projects/covid">covid-19 data</ProjectName>
            </ListItem>
            <ListItem>
              <Icon>
                <TiWeatherWindyCloudy />
              </Icon>
              <ProjectName to="/projects/world-weather">
                world weather
              </ProjectName>
            </ListItem>
            <ListItem>
              <Icon>
                <FaMagic />
              </Icon>
              <ProjectName to="/projects/magic-numbers">
                magic numbers
              </ProjectName>
            </ListItem>
          </ProjectsList>
        </ProjectsContainer>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
