import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarLink,
  CloseButton,
} from "./SidebarElements";
import { useGlobalContext } from "../../context";
import { GrClose } from "react-icons/gr";

const Sidebar = () => {
  const { sidebarIsOpen, toggle } = useGlobalContext();
  return (
    <>
      <SidebarWrapper sidebarIsOpen={sidebarIsOpen} onClick={toggle}>
        <SidebarContainer>
          <SidebarLink
            to="/"
            exact={true}
            activeClassName="active"
            detailcolor={"#faba6f"}
          >
            home
          </SidebarLink>
          <SidebarLink
            to="/projects"
            activeClassName="active"
            detailcolor={"#a9bda0"}
          >
            projects
          </SidebarLink>
          <SidebarLink
            to="/contact"
            activeClassName="active"
            detailcolor={"#9bcbd3"}
          >
            contact
          </SidebarLink>
        </SidebarContainer>
        <CloseButton>
          <GrClose />
        </CloseButton>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
