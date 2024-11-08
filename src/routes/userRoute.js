import express from "express";
import { currentUser, logUser, regUser, UsergetTicketByEmail } from "../controllers/userController.js";
import { validateToken } from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.post("/register", regUser)
router.post("/login", logUser)
router.get("/userCurrent", validateToken, currentUser)
// GET ticket by logged-in user email
router.get("/userTicket", validateToken, UsergetTicketByEmail);



export default router;