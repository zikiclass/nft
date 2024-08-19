/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Administrators` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Administrators` MODIFY `password` VARCHAR(191) NULL,
    MODIFY `date` DATETIME(3) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Administrators_email_key` ON `Administrators`(`email`);
