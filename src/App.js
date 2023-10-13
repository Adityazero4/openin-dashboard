import "./App.css";
import React from "react";
import SignInPage from "./pages/SignInPage";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Transaction from "./components/Transaction";
import Schedule from "./components/Schedule";
import User from "./components/User";
import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/home" element={<Layout />}>
          <Route index={true} element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
