import prisma from "../../lib/prisma.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    if (!users) {
      return res
        .status(400)
        .json({ message: "There are no users in your database!" });
    }
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: "Error in getAllUsers Controller" });
    console.error("Error in getAllUsers Controller", error);
  }
};

export default getAllUsers;
