import express from "express";
const router = express.Router();
import gameController from "../controllers/gameController.js";
import authorController from "../controllers/authorController.js";
import regionController from "../controllers/regionController.js";
import universController from "../controllers/universController.js";
import genreController from "../controllers/genreController.js";

//  ***** Jeux ***** //

// Route pour récupérer tous les jeux
router.get("/jeux", gameController.getJeux);

// Route pour récupérer un jeu spécifique par son ID
router.get("/jeux/:id", gameController.getJeuById);

// Route pour ajouter un nouveau jeu
router.post("/jeux", gameController.createJeu);

// Route pour mettre à jour un jeu existant
router.put("/jeux/:id", gameController.updateJeu);

// Route pour supprimer un jeu existant
router.delete("/jeux/:id", gameController.deleteJeu);

//  ***** Auteurs ***** //

// Route pour récupérer tous les auteurs
router.get("/auteurs", authorController.getAllAuteurs);

// Route pour récupérer un auteur par son id
router.get("/auteurs/:id", authorController.getAuteurById);

// Route pour créer un nouvel auteur
router.post("/auteurs", authorController.createAuteur);

// Route pour mettre à jour un auteur existant
router.put("/auteurs/:id", authorController.updateAuteur);

// Route pour supprimer un auteur existant
router.delete("/auteurs/:id", authorController.deleteAuteur);

//  ***** Régions ***** //

// Récupérer toutes les régions
router.get("/regions", regionController.getAllRegions);

// Récupérer une région par son id
router.get("/regions/:id", regionController.getRegionById);

// Créer une nouvelle région
router.post("/regions", regionController.createRegion);

// Mettre à jour une région existante
router.put("/regions/:id", regionController.updateRegion);

// Supprimer une région existante
router.delete("/regions/:id", regionController.deleteRegion);

//  ***** Univers ***** //

// Récupérer tous les univers
router.get("/univers", universController.getAllUnivers);

// Récupérer un univers par son id
router.get("/univers/:id", universController.getUniversById);

// Créer un nouvel univers
router.post("/univers", universController.createUnivers);

// Mettre à jour un univers existant
router.put("/univers/:id", universController.updateUnivers);

// Supprimer un univers existant
router.delete("/univers/:id", universController.deleteUnivers);

//  ***** Genres ***** //

// Récupérer tous les genres
router.get("/genres", genreController.getAllGenres);

// Récupérer un genre par son id
router.get("/genres/:id", genreController.getGenreById);

// Créer un nouveau genre
router.post("/genres", genreController.createGenre);

// Mettre à jour un genre existant
router.put("/genres/:id", genreController.updateGenre);

// Supprimer un genre existant
router.delete("/genres/:id", genreController.deleteGenre);

export default router;
