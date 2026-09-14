# 😂 Joke API

A full-stack **Joke API web application** built using **Node.js, Express.js, Axios, EJS, HTML, and CSS**.

This project demonstrates how to build, consume, and deploy a **RESTful API** with complete **CRUD (Create, Read, Update, Delete)** functionality.

Users can view jokes, create new jokes, edit existing jokes, and delete jokes through a simple and user-friendly web interface.

The project consists of a separate **REST API backend** and **frontend web server**, both deployed using **Render**.

---

## 🚀 Live Demo

### 🌐 Live Website

https://joke-api-website.onrender.com

### 🔗 Live REST API

https://joke-api-6jkc.onrender.com/jokes

### 💻 GitHub Repository

https://github.com/voggojurohit-crypto/joke-api

---

## 📌 Project Overview

The **Joke API** is a web application that allows users to manage a collection of jokes.

Each joke contains:

- 🆔 Joke ID
- 📝 Joke setup/content
- 😂 Punchline
- 👤 Author

The project consists of two Express.js servers.

### 1. Backend REST API

The backend:

- Stores the jokes
- Provides REST API endpoints
- Handles CRUD operations
- Processes requests and responses

### 2. Frontend Web Server

The frontend:

- Provides the user interface
- Displays jokes dynamically
- Uses Axios to communicate with the backend API
- Uses EJS for dynamic HTML rendering
- Provides forms for creating and editing jokes

---

# ✨ Features

- 😂 View all jokes
- 🔍 View a single joke by ID
- ➕ Create a new joke
- ✏️ Edit an existing joke
- 🗑️ Delete a joke
- 👤 Add an author to every joke
- 🔄 Complete CRUD functionality
- 🌐 RESTful API architecture
- 🔗 Frontend-backend communication using Axios
- 📄 Dynamic content rendering using EJS
- 📱 Simple responsive web interface
- 🚀 Deployed on Render
- 💻 Source code available on GitHub

---

# 🛠️ Technologies Used

| Technology / Tool | Purpose |
|---|---|
| JavaScript | Main programming language |
| Node.js | JavaScript runtime |
| Express.js | Backend and server development |
| Axios | API communication |
| EJS | Dynamic HTML rendering |
| HTML5 | Web page structure |
| CSS3 | Styling and layout |
| Body Parser | Processing request data |
| Git | Version control |
| GitHub | Source code hosting |
| Visual Studio Code | Development environment |
| Render | Application deployment |

---

# 🏗️ Project Architecture

The application follows a simple **frontend-backend architecture**.

```text
                         USER
                           |
                           v
                +----------------------+
                |    Frontend Server   |
                |      Express + EJS   |
                |       server.js      |
                +----------------------+
                           |
                         Axios
                           |
                           v
                +----------------------+
                |      REST API        |
                |   Express + Node.js  |
                |       index.js       |
                +----------------------+
                           |
                           v
                  In-Memory Joke Data
