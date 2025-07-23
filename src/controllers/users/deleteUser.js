import prisma from "../../lib/prisma.js";

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await prisma.user.delete({ where: { id: userId } });
    if (!user) return res.status(404).json({ message: "User not found!" });
    res.status(200).json({ message: `User deleted successfully`, user });
  } catch (error) {
    res.status(500).json({ message: "Error in the deleteUser controller" });
    console.error("Error in the deleteUser controller", error);
  }
};
export default deleteUser;
