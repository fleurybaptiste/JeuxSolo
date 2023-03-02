import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRouter from "./Pages/PublicRouter";

function App() {
    return (
        <>
            {/* Les routes sont gérées par le composant <BrowserRouter> de react-router-dom */}
            <BrowserRouter>
                {/* Les routes sont gérées par le composant <Routes> de react-router-dom */}
                <Routes>
                    {/* Les routes sont gérées par le composant <Route> de react-router-dom */}
                    <Route path="/*" element={<PublicRouter />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
