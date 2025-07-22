import prisma from "../../lib/prisma.js";

const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: `Error in the getUser controller` });
    console.error("Error in the getUser controller", error);
  }
};
export default getUser;
