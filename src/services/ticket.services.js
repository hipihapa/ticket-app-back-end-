// const ticketService = {
//     async getTickets() {
//         return await Ticket.find()
//     },

//     async postTicket() {
//         return await Ticket.create()
//     },


// }

const ticketService = {
    async getTicket() {
        return await Ticket.find()
    }
} 

const ticket = ticketService.getTicket()
resizeBy.status(200).json(ticket)