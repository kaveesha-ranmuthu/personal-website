import React, { useContext, useState } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const toggle = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
  return (
    <AppContext.Provider value={{ sidebarIsOpen, toggle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
