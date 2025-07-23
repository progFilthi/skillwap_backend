import prisma from "../../lib/prisma.js";

const createUser = async (req, res) => {
  try {
    const { name, email, password, bio, skills } = req.body;
    if (!name || !email || !password || !Array.isArray(skills)) {
      return res
        .status(400)
        .json({ message: "name,email,password and skills are required..." });
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        bio: bio || null,
        skills: {
          create: skills.map((skill) => ({
            name: skill.name,
            level: skill.level,
          })),
        },
      },
      include: { skills: true },
    });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Failed to create a user", error);

    if (error.code === "P2002") {
      // Prisma unique constraint failed
      return res
        .status(409)
        .json({ message: "A user with this email already exists." });
    }

    res.status(500).json({ error: "Failed to create a user!" });
  }
};

export default createUser;

{
  /*
  This is the test for creating user

  {
    "name":"Filthi",
    "email":"gamerfilthi123@gmail.com",
    "password":"123456",
    "bio":"Lets have fun",
    "skills":[
        {
            "name":"Gamer",
            "level":"Expert"
        }
    ]
}
  
  
  */
}
