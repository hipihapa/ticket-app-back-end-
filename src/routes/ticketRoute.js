import express from "express";
import { deleteTicket, getTickets, postTicket, putTicket } from "../controllers/ticketController.js";

const router = express.Router();


// READ
router.get("/", getTickets);

// CREATE
router.post("/", postTicket);

// UPDATE
router.put("/:id", putTicket)

// DELETE
router.delete("/:id", deleteTicket);



export default router;