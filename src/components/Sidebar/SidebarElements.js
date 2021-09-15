import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarWrapper = styled.div`
  background-color: #fff8ef;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ sidebarIsOpen }) => (sidebarIsOpen ? "100%" : "0")};
  right: ${({ sidebarIsOpen }) => (sidebarIsOpen ? "0%" : "-100%")};
`;

export const SidebarContainer = styled.div`
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  padding: 30px 45px;
`;

export const SidebarLink = styled(NavLink)`
  text-decoration: none;
  color: #333333;
  font-size: 20px;
  margin-bottom: 20px;
  display: block;
  text-align: center;

  &:hover {
    color: ${({ detailcolor }) => detailcolor};
    transition: 0.2s ease-in-out;
  }

  &.${(props) => props.activeClassName} {
    color: ${({ detailcolor }) => detailcolor};
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 35px;
  margin-right: 35px;

  &:hover {
    transform: scale(1.2);
    transition: ease-in-out 0.2s;
    cursor: pointer;
  }
`;
