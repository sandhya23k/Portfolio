import React from "react";
import ReactDOM from "react-dom/client"; // note the change here
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // createRoot instead of render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
