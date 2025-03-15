import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="btn btn-primary"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
