import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const transitionIn = keyframes`
  from {
    opacity: 0;
    margin-top: 20px
  }

  to {
    opacity: 1;
    margin-top: 0px

    }
`;

export const ProjectsWrapper = styled.div`
  height: 550px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }

  @media screen and (max-width: 705px) {
    height: 500px;
  }

  @media screen and (max-height: 500px) {
    height: 250px;
  }
`;

export const ProjectsContainer = styled.div`
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #333333;
  margin-left: 200px;
  margin-right: 200px;
  width: 100%;
  animation: ${transitionIn} 1s;

  @media screen and (max-width: 750px) {
    text-align: center;
    margin: 0px 50px;
  }
`;

export const ProjectsHeader = styled.img`
  width: 570px;
  margin-bottom: -5px;

  @media screen and (max-width: 977px) {
    width: 300px;
  }

  @media screen and (max-width: 300px) {
    width: 200px;
  }
`;

export const ProjectsList = styled.div`
  margin-left: 2px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -20px;
  width: fit-content;

  @media screen and (max-width: 750px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Icon = styled.p`
  font-size: 20px;
  height: 16px;
  color: #a9bda0;
`;

export const ProjectName = styled(Link)`
  margin-left: 10px;
  color: #333333;
  text-decoration: none;

  &:hover {
    color: #a9bda0;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`;
