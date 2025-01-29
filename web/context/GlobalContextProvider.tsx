"use client";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";

interface GlobalProviderProps {
  children?: React.ReactNode;
}

interface GlobalContextProps {
  sayHello: () => any;
}

const theme = createTheme({});

const GlobalContext = React.createContext<GlobalContextProps | null>(null);

export const useGlobalContext = () => {
  const state = React.useContext(GlobalContext);
  if (!state) throw new Error("State Is Undefined");

  return state;
};

export const GlobalContextProvider: React.FC<GlobalProviderProps> = ({
  children,
}) => {
  const sayHello: GlobalContextProps["sayHello"] = React.useCallback(() => {
    console.log("Context API Working ?");
  }, []);
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <GlobalContext.Provider value={{ sayHello }}>
        {children}
      </GlobalContext.Provider>
    </MantineProvider>
  );
};
