/*
  Warnings:

  - Made the column `description` on table `Jeu` required. This step will fail if there are existing NULL values in that column.
  - Made the column `resume` on table `Jeu` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Jeu` MODIFY `description` TEXT NOT NULL,
    MODIFY `resume` TEXT NOT NULL,
    MODIFY `cover` TEXT NOT NULL;
