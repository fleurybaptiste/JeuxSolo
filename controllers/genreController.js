// Importer l'instance Prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Récupérer tous les genres
async function getAllGenres(req, res) {
    try {
        const genres = await prisma.genre.findMany();
        res.json(genres);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Récupérer un genre par son id
async function getGenreById(req, res) {
    const id = parseInt(req.params.id);
    try {
        const genre = await prisma.genre.findUnique({
            where: { id_genre: id },
            include: { Jeu_Genre: true },
        });
        res.json(genre);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Créer un nouveau genre
async function createGenre(req, res) {
    const { nom_genre } = req.body;
    try {
        const genre = await prisma.genre.create({
            data: {
                nom_genre,
            },
        });
        res.json(genre);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Mettre à jour un genre existant
async function updateGenre(req, res) {
    const id = parseInt(req.params.id);
    const { nom_genre } = req.body;
    try {
        const genre = await prisma.genre.update({
            where: { id_genre: id },
            data: {
                nom_genre,
            },
        });
        res.json(genre);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Supprimer un genre existant
async function deleteGenre(req, res) {
    const id = parseInt(req.params.id);
    try {
        await prisma.genre.delete({ where: { id_genre: id } });
        res.json({ message: "Le genre a bien été supprimé" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

export default {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre,
};
