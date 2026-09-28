import { createContext, useContext, useState } from "react";
const ThemeContext = createContext(null);
export function ThemeProvider({children}) {
  const [dark, setDark] = useState(() => localStorage.getItem("shopsphere_theme") === "dark");
  const toggleTheme = () => {
    setDark(v => {
      localStorage.setItem("shopsphere_theme", !v ? "dark" : "light");
      return !v;
    });
  };
  return <ThemeContext.Provider value={{dark, toggleTheme}}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);