"use client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React, { useEffect, useState } from "react";

interface GlobalProviderProps {
  children?: React.ReactNode;
}

interface GlobalContextProps {
  sayHello: () => any;
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

const GlobalContext = React.createContext<GlobalContextProps | null>(null);

export const useGlobalContext = () => {
  const state = React.useContext(GlobalContext);
  if (!state) throw new Error("State Is Undefined");

  return state;
};

export const GlobalContextProvider: React.FC<GlobalProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<any>(Theme.DARK);
  const sayHello: GlobalContextProps["sayHello"] = React.useCallback(() => {
    console.log("Context API Working ?");
  }, []);

  useEffect(() => {
    if (localStorage.getItem("theme-2025")) {
      setTheme(localStorage.getItem("theme-2025") as Theme);
    } else {
      localStorage.setItem("theme-2025", "dark");
    }
  }, []);
  return (
    <MantineProvider>
      <GlobalContext.Provider value={{ sayHello, theme, setTheme }}>
        {children}
      </GlobalContext.Provider>
    </MantineProvider>
  );
};
