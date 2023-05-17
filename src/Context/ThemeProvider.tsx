import React, { ReactNode, createContext, useState } from "react";

interface IProps {
  children: ReactNode;
}
interface IThemeContext {
  theme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}
type Theme = "light" | "dark";
export const ThemeContext = createContext({} as IThemeContext);

const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
