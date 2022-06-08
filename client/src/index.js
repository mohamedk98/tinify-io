import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import NotFound from "./components/NotFound";
import Redirect from "./components/Redirect";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // App routing
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path=":urlId" element={<Redirect />} />
      <Route path="/404" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
);
