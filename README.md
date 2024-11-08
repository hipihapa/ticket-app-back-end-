# ticket-app-back-end-
This repository contains the backend for a Ticket Management System built with Node.js, Express.js, and MongoDB. It provides an API for managing user authentication, ticket creation, and handling.

### Key Features:
- **User Authentication**: Allows users to register, log in, and authenticate with JWT tokens.
- **Ticket Management**: Users can create tickets, and admins can update or delete them.
- **Role-based Authorization**: Secured routes using JWT to manage access.
- **Error Handling**: Comprehensive error messages for common issues.

### Technologies Used:
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Framework for handling API routes.
- **MongoDB**: NoSQL database for storing users and tickets.
- **Mongoose**: ODM for MongoDB interactions.
- **JWT**: Token-based authentication for secure API access.
- **Bcrypt.js**: Password hashing for security.

### Endpoints:
- **POST /api/user/register**: Register a new user.
- **POST /api/user/login**: Log in and get a JWT token.
- **GET /api/ticket/user-ticket**: Fetch a ticket by the logged-in user's email.
- **POST /api/ticket**: Create a new ticket.
- **PUT /api/ticket/:id**: Update a ticket.
- **DELETE /api/ticket/:id**: Delete a ticket.

### Setup:
1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your database connection string and secret key:
   ```env
   SECRET_KEY=<your-secret-key>
   CONNECTION_STRING=<your-mongodb-connection-string>
   ```
4. Start the server:
   ```bash
   npm start
   
