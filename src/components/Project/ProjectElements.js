import styled, { keyframes } from "styled-components";

const transitionIn = keyframes`
  from {
    opacity: 0;
    margin-top: 40px
  }

  to {
    opacity: 1;
    margin-top: 20px

    }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectContainer = styled.div`
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #333333;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 20px;
  width: 100%;
  animation: ${transitionIn} 1s;

  @media screen and (max-width: 1190px) {
    margin-right: 100px;
    margin-left: 100px;
  }

  @media screen and (max-width: 997px) {
    margin-right: 50px;
    margin-left: 50px;
  }

  @media screen and (max-width: 478px) {
    margin: 0px 0px;
    padding: 20px 20px 20px 0;
  }
`;

export const HeaderContent = styled.div`
  position: relative;
  width: fit-content;
`;

export const ProjectHeader = styled.p`
  font-family: "Yeseva One", serif;
  font-size: 50px;
  background-color: #a9bda0;
  color: #fff8ef;
  width: fit-content;
  padding: 15px 30px;
  border-radius: 100px;
  margin-top: 1px;

  @media screen and (max-width: 887px) {
    font-size: 30px;
    padding: 20px 30px;
  }

  @media screen and (max-width: 610px) {
    font-size: 20px;
  }

  @media screen and (max-width: 478px) {
    font-size: 20px;
    color: #333333;
    background-color: transparent;
    padding: 15px 0px 0px 30px;
  }
`;

export const CodeDemoContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 72px;
  margin-right: 30px;

  @media screen and (max-width: 887px) {
    margin-top: 58px;
    margin-right: 20px;
  }

  @media screen and (max-width: 610px) {
    margin-top: 48px;
  }

  @media screen and (max-width: 478px) {
    position: relative;
    margin: 0 0 0 30px;
  }
`;

export const CodeDemoLink = styled.a`
  background-color: #fff8ef;
  border: 2px solid #333333;
  border-radius: 100px;
  font-size: 15px;
  padding: 5px 5px;
  display: flex;
  width: fit-content;
  margin-right: 5px;
  color: #333333;

  &:hover {
    transform: scale(0.9);
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 478px) {
    border: none;
    padding: 0 5px 0 0;
    font-size: 20px;
    margin-top: -10px;
    margin-bottom: -10px;
  }
`;

export const ContentBody = styled.div`
  display: flex;
  margin-top: -15px;
  margin-bottom: -15px;

  @media screen and (max-width: 887px) {
    margin-top: 20px;
    display: block;
  }
`;

export const Screenshots = styled.div`
  width: 300px;

  @media screen and (max-width: 887px) {
    display: none;
  }
`;

export const Screenshot = styled.img`
  width: 300px;
  height: 170px;
  object-fit: cover;
  margin-bottom: 15px;
  border: 1px solid #333333;
`;

export const Info = styled.div`
  margin-left: 30px;
  margin-top: -15px;
  margin-bottom: 15px;

  @media screen and (max-width: 887px) {
    margin-top: 30px;
  }
`;

export const Heading = styled.p`
  font-family: "Yeseva One", serif;
  font-size: 20px;
  margin-bottom: 0px;
`;

export const Paragraph = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 23px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 5px;
  line-height: 23px;
`;

export const ListItem = styled.li`
  &::before {
    content: "- ";
  }
`;

export const Moodboard = styled.img`
  width: 70%;
  object-fit: cover;
  margin-bottom: 15px;
  margin-left: -30px;
`;

export const Palette = styled.img`
  width: 40%;
  object-fit: cover;
  margin-bottom: 15px;
  margin-top: 10px;
`;
