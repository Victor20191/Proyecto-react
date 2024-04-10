import React, { createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
  console.log(children);
  return <UserContext.Provider value="Victor">{children}</UserContext.Provider>;
};
