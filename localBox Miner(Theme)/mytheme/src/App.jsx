import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import "bootstrap/dist/css/bootstrap.min.css";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`container text-center mt-5 p-4 rounded shadow ${
        theme === "light" ? "bg-light text-dark" : "bg-dark text-white"
      }`}
      style={{ minHeight: "100vh" }}
    >
      <h1 className="mb-4">Welcome to Localbox Miner</h1>
      <p className="lead">
        Experience seamless theme switching with React's Context API.
      </p>

      <div className="d-flex justify-content-center my-4">
        <ThemeToggle />
      </div>

      <div className="d-flex flex-column align-items-center">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Theme Example"
          className="img-fluid rounded shadow-lg"
          style={{ maxWidth: "80%" }}
        />
        <p className="mt-3">
          The current theme enhances your experience with optimized colors and
          smooth transitions.
        </p>
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
