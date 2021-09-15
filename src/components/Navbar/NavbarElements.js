import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const transitionIn = keyframes`
  from {
    opacity: 0;
    margin-bottom: 20px
  }

  to {
    opacity: 1;
    margin-bottom: 0px
    }
`;

export const NavbarWrapper = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff8ef;
`;

export const NavbarContainer = styled.nav`
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${transitionIn} 1s;

  @media screen and (max-width: 610px) {
    display: none;
  }
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: #333333;
  font-size: 13px;
  margin-left: 0px;
  margin-right: 40px;

  &:hover {
    color: ${({ detailcolor }) => detailcolor};
    transition: 0.2s ease-in-out;
  }

  &.${(props) => props.activeClassName} {
    color: ${({ detailcolor }) => detailcolor};
  }

  @media screen and (max-width: 610px) {
    display: none;
  }
`;

export const Logo = styled(NavLink)`
  margin-left: 40px;
  margin-right: 40px;
`;

export const IconLink = styled(NavLink)`
  text-decoration: none;
  color: #333333;
  font-size: 13px;
  margin-left: 40px;
  margin-right: 40px;
`;

export const NavbarIcon = styled.img`
  width: 50px;
`;

export const Icon = styled.p`
  height: 22px;
  font-size: 20px;
  display: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 610px) {
    display: block;
    margin-right: 30px;
  }
`;
