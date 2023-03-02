/*
  Warnings:

  - You are about to drop the column `cover` on the `Jeu` table. All the data in the column will be lost.
  - You are about to drop the `_Jeu_Genre` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `annee_sortie` on the `Jeu` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE `Auteur` DROP FOREIGN KEY `Auteur_id_region_fkey`;

-- DropForeignKey
ALTER TABLE `Jeu` DROP FOREIGN KEY `Jeu_id_auteur_fkey`;

-- DropForeignKey
ALTER TABLE `Jeu` DROP FOREIGN KEY `Jeu_id_univers_fkey`;

-- DropForeignKey
ALTER TABLE `_Jeu_Genre` DROP FOREIGN KEY `_Jeu_Genre_A_fkey`;

-- DropForeignKey
ALTER TABLE `_Jeu_Genre` DROP FOREIGN KEY `_Jeu_Genre_B_fkey`;

-- AlterTable
ALTER TABLE `Auteur` MODIFY `id_region` INTEGER NULL;

-- AlterTable
ALTER TABLE `Jeu` DROP COLUMN `cover`,
    DROP COLUMN `annee_sortie`,
    ADD COLUMN `annee_sortie` DATETIME(3) NOT NULL,
    MODIFY `difficulte` VARCHAR(191) NULL,
    MODIFY `description` VARCHAR(191) NULL,
    MODIFY `resume` VARCHAR(191) NULL,
    MODIFY `note` DOUBLE NULL,
    MODIFY `id_auteur` INTEGER NULL,
    MODIFY `id_univers` INTEGER NULL;

-- DropTable
DROP TABLE `_Jeu_Genre`;

-- CreateTable
CREATE TABLE `Jeu_Genre` (
    `id_jeu` INTEGER NOT NULL,
    `id_genre` INTEGER NOT NULL,

    PRIMARY KEY (`id_jeu`, `id_genre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Jeu` ADD CONSTRAINT `Jeu_id_auteur_fkey` FOREIGN KEY (`id_auteur`) REFERENCES `Auteur`(`id_auteur`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Jeu` ADD CONSTRAINT `Jeu_id_univers_fkey` FOREIGN KEY (`id_univers`) REFERENCES `Univers`(`id_univers`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Auteur` ADD CONSTRAINT `Auteur_id_region_fkey` FOREIGN KEY (`id_region`) REFERENCES `Region`(`id_region`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Jeu_Genre` ADD CONSTRAINT `Jeu_Genre_id_jeu_fkey` FOREIGN KEY (`id_jeu`) REFERENCES `Jeu`(`id_jeu`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Jeu_Genre` ADD CONSTRAINT `Jeu_Genre_id_genre_fkey` FOREIGN KEY (`id_genre`) REFERENCES `Genre`(`id_genre`) ON DELETE RESTRICT ON UPDATE CASCADE;
