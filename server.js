import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import ticketRoute from "./src/routes/ticketRoute.js";
import userRoute from "./src/routes/userRoute.js"

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/ticket", ticketRoute)
app.use("/api/user", userRoute)


mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log("database connected");
    app.listen(PORT, () => {
        console.log(`server running on port: ${PORT}`);
    })
})
.catch(() => {
    console.log("database failed")
})
