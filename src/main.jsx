import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./components/App.jsx";
import "./index.css";
// Las clases ya no son necesarias en React, se usan funciones
// Functional Components es lo habitual

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);