-- AlterTable
ALTER TABLE `Jeu` ADD COLUMN `lien_affiliation_amazon` VARCHAR(191) NULL,
    ADD COLUMN `lien_affiliation_externe` VARCHAR(191) NULL,
    ADD COLUMN `lien_affiliation_philibert` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Journaling` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `note` DOUBLE NULL,
    `id_auteur` INTEGER NULL,
    `lien_affiliation_amazon` VARCHAR(191) NULL,
    `lien_affiliation_philibert` VARCHAR(191) NULL,
    `lien_affiliation_externe` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JeuxDePlateau` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `nombre_joueurs` INTEGER NOT NULL,
    `age_minimum` INTEGER NOT NULL,
    `duree` INTEGER NOT NULL,
    `editeur` VARCHAR(191) NOT NULL,
    `image` TEXT NOT NULL,
    `note` DOUBLE NULL,
    `id_auteur` INTEGER NULL,
    `lien_affiliation_amazon` VARCHAR(191) NULL,
    `lien_affiliation_philibert` VARCHAR(191) NULL,
    `lien_affiliation_externe` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LivresJeux` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `annee_sortie` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `note` DOUBLE NULL,
    `id_auteur` INTEGER NULL,
    `lien_affiliation_amazon` VARCHAR(191) NULL,
    `lien_affiliation_philibert` VARCHAR(191) NULL,
    `lien_affiliation_externe` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OutilsDeCreation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `lien_affiliation_amazon` VARCHAR(191) NULL,
    `lien_affiliation_philibert` VARCHAR(191) NULL,
    `lien_affiliation_externe` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materiel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `lien_affiliation_amazon` VARCHAR(191) NULL,
    `lien_affiliation_philibert` VARCHAR(191) NULL,
    `lien_affiliation_externe` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Journaling` ADD CONSTRAINT `Journaling_id_auteur_fkey` FOREIGN KEY (`id_auteur`) REFERENCES `Auteur`(`id_auteur`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JeuxDePlateau` ADD CONSTRAINT `JeuxDePlateau_id_auteur_fkey` FOREIGN KEY (`id_auteur`) REFERENCES `Auteur`(`id_auteur`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LivresJeux` ADD CONSTRAINT `LivresJeux_id_auteur_fkey` FOREIGN KEY (`id_auteur`) REFERENCES `Auteur`(`id_auteur`) ON DELETE SET NULL ON UPDATE CASCADE;
