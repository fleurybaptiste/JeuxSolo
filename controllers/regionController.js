// Importer l'instance Prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Récupérer toutes les régions
async function getAllRegions(req, res) {
    try {
        const regions = await prisma.region.findMany();
        res.json(regions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Récupérer une région par son id
async function getRegionById(req, res) {
    const id = parseInt(req.params.id);
    try {
        const region = await prisma.region.findUnique({
            where: { id_region: id },
            include: { Auteur: true },
        });
        res.json(region);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Créer une nouvelle région
async function createRegion(req, res) {
    const { nom_region } = req.body;
    try {
        const region = await prisma.region.create({
            data: {
                nom_region,
            },
        });
        res.json(region);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Mettre à jour une région existante
async function updateRegion(req, res) {
    const id = parseInt(req.params.id);
    const { nom_region } = req.body;
    try {
        const region = await prisma.region.update({
            where: { id_region: id },
            data: {
                nom_region,
            },
        });
        res.json(region);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

// Supprimer une région existante
async function deleteRegion(req, res) {
    const id = parseInt(req.params.id);
    try {
        await prisma.region.delete({ where: { id_region: id } });
        res.json({ message: "La région a bien été supprimée" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
}

export default {
    getAllRegions,
    getRegionById,
    createRegion,
    updateRegion,
    deleteRegion,
};
