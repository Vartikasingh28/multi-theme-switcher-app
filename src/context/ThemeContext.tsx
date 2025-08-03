import React, { createContext, useState, useEffect, useContext } from "react";

type Theme = "theme1" | "theme2" | "theme3";

const ThemeContext = createContext({
  theme: "theme1" as Theme,
  setTheme: (theme: Theme) => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "theme1"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
