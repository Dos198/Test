import React, { createContext, useContext } from 'react';

interface Theme {
  primaryColor: string;
  borderRadius: string;
  shadow: string;
}

const ThemeContext = createContext<Theme>({
  primaryColor: "#f5a623",
  borderRadius: "15px",
  shadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeContext.Provider value={{
    primaryColor: "#f5a623",
    borderRadius: "15px",
    shadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  }}>
    {children}
  </ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
