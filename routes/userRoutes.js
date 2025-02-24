import { Router } from "express";
import { createNewUser, getAllUsers } from "../controllers/userController";

const router = Router();

// create a user
router.post("/", createNewUser);
// get all users
router.get("/", getAllUsers);

export default router;
