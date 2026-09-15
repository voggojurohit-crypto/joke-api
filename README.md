# 😂 Joke API

A full-stack Joke API web application built using **Node.js, Express.js, Axios, HTML, CSS, and EJS**.

This project demonstrates how to build, consume, and deploy a RESTful API with complete CRUD functionality. Users can view jokes, create new jokes, edit existing jokes, and delete jokes through a simple web interface.

## 🚀 Live Demo

🌐 **Website:**  
https://joke-api-website.onrender.com

🔗 **Joke API:**  
https://joke-api-6jkc.onrender.com/jokes

## 📌 Features

- View all jokes
- Create new jokes
- Edit existing jokes
- Delete jokes
- REST API integration
- Dynamic web pages using EJS
- HTTP requests using Axios
- Express.js server
- JSON request and response handling
- Responsive frontend styling
- Deployed using Render

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- Axios
- Body Parser

### Frontend
- HTML5
- CSS3
- EJS

### API
- REST API
- JSON
- CRUD operations
- HTTP methods: GET, POST, PUT/PATCH, DELETE

### Deployment
- Render

### Version Control
- Git
- GitHub

## 🔄 REST API Operations

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/jokes` | Get all jokes |
| GET | `/jokes/:id` | Get a specific joke |
| POST | `/jokes` | Create a new joke |
| PUT/PATCH | `/jokes/:id` | Update an existing joke |
| DELETE | `/jokes/:id` | Delete a joke |

## 📂 Project Structure

```text
joke-api/
│
├── public/
│   └── styles/
│
├── views/
│
├── index.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
