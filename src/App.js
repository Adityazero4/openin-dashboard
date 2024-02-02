import "./App.css";
import React from "react";
import SignInPage from "./pages/SignInPage";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Calendar from "./pages/Calendar";
import Upload from "./pages/Upload";
import Schedule from "./pages/Schedule";
import Notification from "./pages/Notification";
import Invoice from "./pages/Invoice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/home" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="upload" element={<Upload />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="notification" element={<Notification />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
