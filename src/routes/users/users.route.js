import { Router } from "express";

//these are users routes

import getAllUsers from "../../controllers/users/getAllUsers.js";
import getUser from "../../controllers/users/getUser.js";
import createUser from "../../controllers/users/createUser.js";
import updateUser from "../../controllers/users/updateUser.js";
import deleteUser from "../../controllers/users/deleteUser.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/:userId", getUser);
router.post("/", createUser);
router.patch("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
