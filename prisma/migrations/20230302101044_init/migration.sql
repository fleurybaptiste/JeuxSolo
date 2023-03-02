-- CreateTable
CREATE TABLE `Jeu` (
    `id_jeu` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `annee_sortie` INTEGER NOT NULL,
    `difficulte` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `resume` VARCHAR(191) NOT NULL,
    `note` DOUBLE NOT NULL,
    `id_auteur` INTEGER NOT NULL,
    `id_univers` INTEGER NOT NULL,

    PRIMARY KEY (`id_jeu`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Auteur` (
    `id_auteur` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_auteur` VARCHAR(191) NOT NULL,
    `id_region` INTEGER NOT NULL,

    PRIMARY KEY (`id_auteur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Region` (
    `id_region` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_region` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_region`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Univers` (
    `id_univers` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_univers` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_univers`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `id_genre` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_genre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_genre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_Jeu_Genre` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_Jeu_Genre_AB_unique`(`A`, `B`),
    INDEX `_Jeu_Genre_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Jeu` ADD CONSTRAINT `Jeu_id_auteur_fkey` FOREIGN KEY (`id_auteur`) REFERENCES `Auteur`(`id_auteur`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Jeu` ADD CONSTRAINT `Jeu_id_univers_fkey` FOREIGN KEY (`id_univers`) REFERENCES `Univers`(`id_univers`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Auteur` ADD CONSTRAINT `Auteur_id_region_fkey` FOREIGN KEY (`id_region`) REFERENCES `Region`(`id_region`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Jeu_Genre` ADD CONSTRAINT `_Jeu_Genre_A_fkey` FOREIGN KEY (`A`) REFERENCES `Genre`(`id_genre`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Jeu_Genre` ADD CONSTRAINT `_Jeu_Genre_B_fkey` FOREIGN KEY (`B`) REFERENCES `Jeu`(`id_jeu`) ON DELETE CASCADE ON UPDATE CASCADE;
