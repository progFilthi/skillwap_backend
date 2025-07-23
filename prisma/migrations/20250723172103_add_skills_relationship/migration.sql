/*
  Warnings:

  - The `status` column on the `SwapRequest` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[userId,name]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "SwapStatus" AS ENUM ('pending', 'accepted', 'rejected');

-- AlterTable
ALTER TABLE "SwapRequest" DROP COLUMN "status",
ADD COLUMN     "status" "SwapStatus" NOT NULL DEFAULT 'pending';

-- CreateIndex
CREATE UNIQUE INDEX "Skill_userId_name_key" ON "Skill"("userId", "name");
