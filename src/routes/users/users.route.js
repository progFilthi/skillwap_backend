import { Router } from "express";

//these are users routes

import getAllUsers from "../../controllers/users/getAllUsers.js";
import getUser from "../../controllers/users/getUser.js";
import createUser from "../../controllers/users/createUser.js";
import updateUser from "../../controllers/users/updateUser.js";
import deleteUser from "../../controllers/users/deleteUser.js";

const router = Router();

//a GET request, route that gets all users
router.get("/", getAllUsers);

//a GET request, route that gets a user by the userId
router.get("/:userId", getUser);

//a POST request, route that creates a user
router.post("/", createUser);

//a PATCH request, route that updates a user by the userId
router.patch("/:userId", updateUser);

//a DELETE request, route that deletes a user by the userId
router.delete("/:userId", deleteUser);

export default router;
