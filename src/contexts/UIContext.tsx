// I want to write a context that will be show or hide the sider

import React, { createContext, useState } from "react";

interface IContextProps {
  displaySider: "block" | "none";
  setDisplaySider: React.Dispatch<React.SetStateAction<"none" | "block">>;
}

export const UIContext = createContext({} as IContextProps);

export const UIProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [displaySider, setDisplaySider] = useState<"none" | "block">("block");

  return (
    <UIContext.Provider value={{ displaySider, setDisplaySider }}>
      {children}
    </UIContext.Provider>
  );
};
