import React from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarLink,
  NavbarIcon,
  Icon,
  Logo,
} from "./NavbarElements";
import logo from "../../images/logo.png";
import { HiMenu } from "react-icons/hi";
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const { toggle } = useGlobalContext();
  return (
    <>
      <NavbarWrapper>
        <Logo to="/">
          <NavbarIcon src={logo} />
        </Logo>
        <Icon onClick={toggle}>
          <HiMenu />
        </Icon>
        <NavbarContainer>
          <NavbarLink
            to="/"
            exact={true}
            activeClassName="active"
            detailcolor={"#faba6f"}
          >
            home
          </NavbarLink>
          <NavbarLink
            to="/projects"
            activeClassName="active"
            detailcolor={"#a9bda0"}
          >
            projects
          </NavbarLink>
          <NavbarLink
            to="/contact"
            activeClassName="active"
            detailcolor={"#9bcbd3"}
          >
            contact
          </NavbarLink>
        </NavbarContainer>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
