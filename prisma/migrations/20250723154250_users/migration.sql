-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_userId_fkey";

-- DropForeignKey
ALTER TABLE "SwapRequest" DROP CONSTRAINT "SwapRequest_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "SwapRequest" DROP CONSTRAINT "SwapRequest_senderId_fkey";

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SwapRequest" ADD CONSTRAINT "SwapRequest_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SwapRequest" ADD CONSTRAINT "SwapRequest_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
