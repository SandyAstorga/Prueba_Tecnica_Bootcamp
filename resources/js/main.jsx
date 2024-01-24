import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import '../sass/app.scss'
// import '../css/app.css'
// import CleanEffect from "./CleanEffect";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    // <CleanEffect /> Ejempo de useState y useEffect
);