import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import CatalogGames from "../Components/Games/CatalogGames/CatalogGames";
import GameDetails from "../Components/Games/GameDetails/GameDetails";
import PublicLayout from "./PublicLayout";

export default function PublicRouter() {
    return (
        <Routes>
            {/* A englober d'un élément parent */}
            <Route element={<PublicLayout />}>
                <Route index element={<HomePage />} />
                {/* Routes Utilisateurs non-connecté */}
                <Route path="/" element={<HomePage />} />
                <Route path="/sologames" element={<CatalogGames />} />
                <Route path="/jeux/:id_jeu" element={<GameDetails />} />
            </Route>
        </Routes>
    );
}
