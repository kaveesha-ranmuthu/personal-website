import styled, { keyframes } from "styled-components";

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

export const ContactWrapper = styled.div`
  height: 570px;
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

export const ContactContainer = styled.div`
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

export const ContactHeader = styled.img`
  width: 390px;

  @media screen and (max-width: 977px) {
    width: 200px;
  }

  @media screen and (max-width: 300px) {
    width: 150px;
  }
`;

export const ContactInfo = styled.div`
  margin-top: -4px;
`;

export const Paragraph = styled.p``;

export const ContactLink = styled.div`
  display: flex;
  align-items: center;
  height: 30px;

  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`;

export const Link = styled.a`
  color: #333333;
  text-decoration: none;

  &:hover {
    color: #9bcbd3;
    transition: 0.2s ease-in-out;
  }
`;

export const Icon = styled.p`
  font-size: 15px;
  height: 15px;
  margin-right: 8px;
  color: #9bcbd3;
`;
