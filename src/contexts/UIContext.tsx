import React, { createContext, useState } from "react";

interface IContextProps {
  displaySider: "block" | "none";
  setDisplaySider: React.Dispatch<React.SetStateAction<"none" | "block">>;
}

export const UIContext = createContext({} as IContextProps);

export const UIProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [displaySider, setDisplaySider] = useState<"none" | "block">("none");

  return (
    <UIContext.Provider value={{ displaySider, setDisplaySider }}>
      {children}
    </UIContext.Provider>
  );
};
