# MERN Backend Practice Project

## Overview

This project is created for **practice purposes** using the **MERN stack (MongoDB, Express, React, Node.js)**.
It focuses on building a backend server and testing APIs to gain practical experience.

## Features

* Built a **backend** using Node.js and Express.
* Connected with **MongoDB** for data storage.
* Practiced **API testing** using **Postman**.
* Includes basic **CRUD operations** (Create, Read, Update, Delete).

## Prerequisites

Before running the project, make sure you have installed:

* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* [Postman](https://www.postman.com/) (for testing APIs)

## Installation

1. Clone the repository:

```bash
git clone <your-repo-link>
```

2. Navigate to the backend folder:

```bash
cd backend
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file and add your MongoDB URI:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

5. Start the server:

```bash
npm start
```

## API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /api/items     | Get all items     |
| POST   | /api/items     | Add a new item    |
| GET    | /api/items/:id | Get item by ID    |
| PUT    | /api/items/:id | Update item by ID |
| DELETE | /api/items/:id | Delete item by ID |

> **Note:** You can test all APIs using **Postman**.

## Project Structure

```
backend/
│
├── models/        # MongoDB models
├── routes/        # API routes
├── controllers/   # Controller functions
├── .env           # Environment variables
├── server.js      # Main server file
└── package.json   # Project dependencies
```

## Usage

1. Run the backend server.
2. Open Postman and test API endpoints.
3. Perform CRUD operations on your database to see the results.

## Future Improvements

* Add **user authentication** with JWT tokens.
* Integrate **role-based access control**.
* Connect the backend with a **frontend React app**.
* Implement **data validation** and **error handling** for all endpoints.

## Learning Outcomes

* Gained hands-on experience with **MERN backend development**.
* Learned how to **design RESTful APIs**.
* Practiced **testing APIs** using Postman to ensure reliability.
* Improved understanding of **server-client interaction** and database operations.
