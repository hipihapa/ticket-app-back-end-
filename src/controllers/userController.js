import { User } from "../models/userModel.js";
import { Ticket } from "../models/ticketModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const regUser = async (req, res) => {
  const { username, email, password } = req.body;
  const regUser = await User.findOne({ email });
  if (regUser) {
    return res.status(400).json({ msg: "User already exists" });
  }

  // password hashing
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword });
  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ id: user.id, email: user.email });
  } else {
    res.status(400).json({ msg: "User data is invalid" });
  }
};

export const logUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ msg: "Fields are empty" });
  }

  //comparing password
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.SECRET_KEY,
      { expiresIn: "10m" }
    );
    res.status(200).json(accessToken);
  }else{
   res.status(400).json({msg: "Invalid Email or Password"})
  }
};

export const currentUser = async (req, res) => {
  res.json(req.user);
};

export const UsergetTicketByEmail = async (req, res) => {
    try {
      // Retrieve email from the decoded JWT token (req.user)
      const email = req.user.email;
  
      // Find a ticket by email
      const ticket = await Ticket.findOne({ email });
  
      if (!ticket) {
        return res.status(404).json({ msg: "No ticket found for this user" });
      }
  
      res.status(200).json(ticket);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };