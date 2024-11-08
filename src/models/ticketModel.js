import mongoose from "mongoose";

const TicketSchema = mongoose.Schema({
    // user_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref: "User",
    // },

    moviename: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required:true,
    },

},
{
    timestamps: true,
}
);

export const Ticket = mongoose.model("Ticket", TicketSchema);