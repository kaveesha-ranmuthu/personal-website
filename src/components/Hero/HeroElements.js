import styled, { keyframes } from "styled-components";

const transitionIn = keyframes`
  from {
    opacity: 0;
    margin-top: -50px
  }

  to {
    opacity: 1;
    margin-top: -70px

    }
`;

const mobileTransition = keyframes`
  from {
    opacity: 0;
    margin-top: -30px
  }

  to {
    opacity: 1;
    margin-top: -50px

    }
`;

const mobileTransition2 = keyframes`
  from {
    opacity: 0;
    margin-top: 20px
  }

  to {
    opacity: 1;
    margin-top: 0px

    }
`;

export const HeroWrapper = styled.div`
  height: 615px;
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

export const HeroContainer = styled.div`
  margin-left: 200px;
  margin-right: 200px;
  width: 100%;
  margin-top: -70px;
  animation: ${transitionIn} 1s;

  @media screen and (max-width: 750px) {
    text-align: center;
    margin: 0px 90px;
    margin-top: -50px;
    animation: ${mobileTransition} 1s;
  }

  @media screen and (max-width: 705px) {
    margin-top: 0px;
    animation: ${mobileTransition2} 1s;
  }
`;

export const Hello = styled.img`
  width: 200px;
  margin-bottom: -15px;
`;

export const Info = styled.p`
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #333333;
  line-height: 20px;
`;
