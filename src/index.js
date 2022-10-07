import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ModalStateContextProvider } from "./store/modal-state-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalStateContextProvider>
    <App />
  </ModalStateContextProvider>
);
