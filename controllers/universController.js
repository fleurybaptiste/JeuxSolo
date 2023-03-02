// Importer l'instance Prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Récupérer tous les univers
async function getAllUnivers(req, res) {
    try {
        const univers = await prisma.univers.findMany();
        res.json(univers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Récupérer un univers par son id
async function getUniversById(req, res) {
    const id = parseInt(req.params.id);
    try {
        const univers = await prisma.univers.findUnique({
            where: { id_univers: id },
            include: { Jeu: true },
        });
        res.json(univers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Créer un nouvel univers
async function createUnivers(req, res) {
    const { nom_univers } = req.body;
    try {
        const univers = await prisma.univers.create({
            data: {
                nom_univers,
            },
        });
        res.json(univers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Mettre à jour un univers existant
async function updateUnivers(req, res) {
    const id = parseInt(req.params.id);
    const { nom_univers } = req.body;
    try {
        const univers = await prisma.univers.update({
            where: { id_univers: id },
            data: {
                nom_univers,
            },
        });
        res.json(univers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Supprimer un univers existant
async function deleteUnivers(req, res) {
    const id = parseInt(req.params.id);
    try {
        await prisma.univers.delete({ where: { id_univers: id } });
        res.json({ message: "L'univers a bien été supprimé" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

export default {
    getAllUnivers,
    getUniversById,
    createUnivers,
    updateUnivers,
    deleteUnivers,
};
