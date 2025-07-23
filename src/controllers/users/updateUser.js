import prisma from "../../lib/prisma.js";

const updateUser = async (req, res) => {
  try {
    const { name, email, password, bio, skills } = req.body;
    const { userId } = req.params;

    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (password) updateData.password = password;
    if (bio !== undefined) updateData.bio = bio;

    // Step 1: Update the user basic info
    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    // Step 2: Handle skill upserts separately
    if (Array.isArray(skills)) {
      for (const skill of skills) {
        await prisma.skill.upsert({
          where: {
            // You need to make sure this unique constraint exists:
            userId_name: {
              userId,
              name: skill.name,
            },
          },
          update: {
            level: skill.level,
          },
          create: {
            name: skill.name,
            level: skill.level,
            userId,
          },
        });
      }
    }

    // Step 3: Fetch updated user including skills
    const updatedUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { skills: true },
    });

    res
      .status(200)
      .json({ message: "User updated successfully!", user: updatedUser });
  } catch (error) {
    console.error("Error in updateUser controller:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

export default updateUser;
