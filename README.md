# Automateasy Backend

## Overview
This project is a Node.js application that connects to a MongoDB database using Mongoose. It includes endpoints to fetch user data and is designed to handle large datasets efficiently.

## Features
- Fetch all users with optional data limit to handle large datasets.
- Retrieve individual user details by a unique user ID.
- Limits the number of users retrieved per request to avoid performance issues with large datasets.

## Technologies Used
- **NodeJS**: JavaScript server environment.
- **ExpressJS**: Node.js web application framework.
- **MongoDB**: Document-oriented database program.

## Project Setup

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/)

### 2. Clone the Repository
```bash
git clone https://github.com/aniketmu/automateasy_backend.git
cd automateasy_backend

```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configuration
Create a .env file in the root directory of the project with the following content:
```bash
MONGO_KEY=<your-mongodb-password>
```

Replace <your-mongodb-password> with the MongoDB password shared on the submission Email. Ensure this file is not shared or committed to version control.

### 5. Database Connection
The application uses Mongoose to connect to MongoDB. The connection details are configured in connect.js

### 6. Start the Server

```bash
npm start
```

The server will start and listen on port 4000. Ensure that MongoDB is accessible from your environment.

## Project Structure

```bash
automateasy_backend/
├── connect.js
├── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

# API Endpoints

## 1. Get All Users
- **Endpoint:** `GET /users`
- **Description:** Fetches a list of users from the database, limited to 500 users.
- **Response:**
  - **Success:** JSON array of user objects.
  - **Error Handling:** Returns a `500` status code with an error message if data retrieval fails.

## 2. Get User by ID
- **Endpoint:** `GET /users/:id`
- **Description:** Fetches a user by their unique `userId`.
- **Parameters:**
  - `id`: User ID (e.g., `1`).
- **Response:**
  - **Success:** JSON object of the user.
  - **Error Handling:**
    - Returns a `404` status code with "User not found" if the user does not exist.
    - Returns a `500` status code with an error message if data retrieval fails.

# Example Requests

## Fetch All Users
```bash
http://localhost:4000/users
```

## Fetch User by ID
```bash
http://localhost:4000/users/1
```

# Troubleshooting

## Error: "Failed to connect to the database"
- **Solution:** Verify that the MongoDB URI is correct and that the .env file is correctly configured with the MongoDB password.

# Additional Notes

## Handling Large Datasets
- The application uses `limit(500)` to fetch a maximum of 500 users to manage performance with large datasets. Adjust the limit as necessary based on your use case.

## GitHub Repository
To view the source code or contribute, visit the GitHub repository [here](https://github.com/aniketmu/automateasy_backend).
