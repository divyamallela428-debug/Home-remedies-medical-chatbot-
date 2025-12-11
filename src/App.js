// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Login from "./Components/Login";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css";

// A wrapper to access route inside App component
const AppWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const isHomePage = location.pathname === "/home";

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <div className="App">
                <h1>Welcome to SevaMitraMedi</h1>
                <h3> Your Trusted Medical Assistant.
                Here to support your health journey with care, knowledge, and tradition</h3>
                <Home />
                <About />
                <Work />
                <Testimonial />
                <Contact />
                <Footer />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>

      {/* Show chatbot only on /home and when logged in */}
      {isLoggedIn && isHomePage && (
        <df-messenger
          intent="WELCOME"
          chat-title="BharatMediBot"
          agent-id="4daa5f6d-c020-459c-a5ae-f6b1711888f2"
          language-code="en"
        ></df-messenger>
      )}
    </>
  );
};

// Wrap AppWrapper with Router
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
