import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="header">
      <div className="logo">🌀 ThemeApp</div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <select value={theme} onChange={(e) => setTheme(e.target.value as any)}>
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
    </header>
  );
};

export default Header;
