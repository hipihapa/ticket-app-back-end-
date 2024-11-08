import { Ticket } from "../models/ticketModel.js";

export const getTickets = async (req, res) => {
  try {
    const ticket = await Ticket.find();
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const postTicket = async (req, res) => {
  try {
    const { moviename, email, phone } = req.body;
    const ticket = await Ticket.create({ moviename, email, phone });
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const putTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { moviename, email, phone } = req.body;
    const ticket = await Ticket.findByIdAndUpdate(
      id,
      { moviename, email, phone },
      { new: true }
    );
    res.status(202).json(ticket);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findByIdAndDelete(id)
    res.status(200).json({msg: "ticket deleted"})
  } catch (error) {
    res.status(400).json({msg: error.message});
  }
};
