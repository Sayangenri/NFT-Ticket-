import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConnectPage from "./pages/Connectbutton"; // Adjust path to ConnectPage
import HomePage from "./pages/Home"; // Adjust path to HomePage
import Mint from "./pages/Mint"
import "./tailwind.css"; // Import the Tailwind CSS file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConnectPage />} /> {/* Default page */}
        <Route path="/home" element={<HomePage />} /> {/* Home page */}
        <Route path="/mint" element={<Mint />} />
      </Routes>
    </Router>
  );
}

export default App;
