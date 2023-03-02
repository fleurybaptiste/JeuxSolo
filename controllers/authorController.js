// Importer l'instance Prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Contrôleur pour récupérer tous les auteurs
async function getAllAuteurs(req, res) {
    try {
        const auteurs = await prisma.auteur.findMany();
        res.json(auteurs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Récupérer un auteur par son id
async function getAuteurById(req, res) {
    const id = parseInt(req.params.id);
    try {
        const auteur = await prisma.auteur.findUnique({
            where: { id_auteur: id },
            include: { Region: true, Jeu: true },
        });
        res.json(auteur);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Créer un nouvel auteur
async function createAuteur(req, res) {
    const { nom_auteur, id_region } = req.body;
    try {
        const auteur = await prisma.auteur.create({
            data: {
                nom_auteur,
                Region: { connect: { id_region } },
            },
        });
        res.json(auteur);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Mettre à jour un auteur existant
async function updateAuteur(req, res) {
    const id = parseInt(req.params.id);
    const { nom_auteur, id_region } = req.body;
    try {
        const auteur = await prisma.auteur.update({
            where: { id_auteur: id },
            data: {
                nom_auteur,
                Region: { connect: { id_region } },
            },
        });
        res.json(auteur);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Supprimer un auteur existant
async function deleteAuteur(req, res) {
    const id = parseInt(req.params.id);
    try {
        await prisma.auteur.delete({ where: { id_auteur: id } });
        res.json({ message: "L'auteur a bien été supprimé" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

export default {
    getAllAuteurs,
    getAuteurById,
    createAuteur,
    updateAuteur,
    deleteAuteur,
};
