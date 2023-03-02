// Importer l'instance Prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Contrôleur pour récupérer tous les jeux

async function getJeux(req, res) {
    try {
        const jeux = await prisma.jeu.findMany();
        res.json(jeux);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message:
                "Une erreur est survenue lors de la récupération des jeux.",
        });
    }
}

// Contrôleur pour récupérer un jeu spécifique par son ID

async function getJeuById(req, res) {
    const id = parseInt(req.params.id);

    try {
        const jeu = await prisma.jeu.findUnique({ where: { id_jeu: id } });
        if (!jeu) {
            res.status(404).json({
                message: `Le jeu avec l'ID ${id} n'a pas été trouvé.`,
            });
        } else {
            res.json(jeu);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Une erreur est survenue lors de la récupération du jeu.",
        });
    }
}

// Contrôleur pour ajouter un jeu

async function createJeu(req, res) {
    const {
        titre,
        annee_sortie,
        cover,
        difficulte,
        description,
        resume,
        note,
        id_auteur,
        id_univers,
    } = req.body;
    const jeu = await prisma.jeu.create({
        data: {
            titre,
            annee_sortie,
            cover,
            difficulte,
            description,
            resume,
            note,
            Auteur: {
                connect: {
                    id_auteur,
                },
            },
            Univers: {
                connect: {
                    id_univers,
                },
            },
        },
        include: {
            Auteur: true,
            Univers: true,
            Jeu_Genre: {
                include: {
                    Genre: true,
                },
            },
        },
    });
    res.json(jeu);
}

// Contrôleur pour mettre à jour un jeu par son id

async function updateJeu(req, res) {
    const { id } = req.params;
    const {
        titre,
        annee_sortie,
        cover,
        difficulte,
        description,
        resume,
        note,
        id_auteur,
        id_univers,
    } = req.body;
    const jeu = await prisma.jeu.update({
        where: {
            id_jeu: parseInt(id),
        },
        data: {
            titre,
            annee_sortie,
            cover,
            difficulte,
            description,
            resume,
            note,
            Auteur: {
                connect: {
                    id_auteur,
                },
            },
            Univers: {
                connect: {
                    id_univers,
                },
            },
        },
        include: {
            Auteur: true,
            Univers: true,
            Jeu_Genre: {
                include: {
                    Genre: true,
                },
            },
        },
    });
    res.json(jeu);
}

// Contrôleur pour supprimer un jeu

async function deleteJeu(req, res) {
    // Récupération de l'id du jeu à supprimer depuis les paramètres de la requête
    const id = parseInt(req.params.id);

    try {
        // Recherche du jeu correspondant dans la base de données
        const jeu = await prisma.jeu.findUnique({
            where: {
                id_jeu: id,
            },
        });

        // Si le jeu n'est pas trouvé, renvoyer une erreur 404 Not Found
        if (!jeu) {
            return res.status(404).json({ message: "Jeu non trouvé" });
        }

        // Suppression du jeu de la base de données
        await prisma.jeu.delete({
            where: {
                id_jeu: id,
            },
        });

        // Envoi d'une réponse 204 No Content pour indiquer que la suppression a réussi
        res.status(204).send();
    } catch (error) {
        // Si une erreur se produit, renvoyer une réponse 500 Internal Server Error
        res.status(500).json({
            message: "Une erreur est survenue lors de la suppression du jeu",
            error,
        });
    }
}

export default {
    getJeux,
    getJeuById,
    createJeu,
    updateJeu,
    deleteJeu,
};
