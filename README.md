# 📝 NodeJs-Express-EJS-MongoDB Blog

> A full-stack blog platform built with **Node.js**, **Express**, **EJS**, and **MongoDB** — featuring authentication, session management, and a dedicated admin dashboard.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express 5 |
| Templating | EJS + express-ejs-layouts |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcrypt + express-session |
| Dev Tool | Nodemon |

---

## ✨ Features

- 🔐 **Authentication** — Secure sign-in with JWT tokens and bcrypt password hashing
- 🛡️ **Session Management** — Persistent sessions via `express-session` + `connect-mongo`
- 🖊️ **Blog Management** — Create, read, update, and delete blog posts
- 🧑‍💼 **Admin Dashboard** — Dedicated admin interface for content management
- 🍪 **Cookie Handling** — Managed with `cookie-parser`
- 🔁 **Method Override** — Support for PUT and DELETE via HTML forms
- 🌍 **Environment Config** — Secure configuration using `dotenv`

---

## 📁 Project Structure

```
📦 blog/
├── 📂 public/               # Static assets
│   ├── css/                 # Stylesheets
│   ├── img/                 # Images
│   └── js/                  # Client-side scripts
│
├── 📂 server/               # Server-side logic
│   ├── config/              # DB connection & app config
│   ├── helpers/             # Utility/helper functions
│   ├── models/              # Mongoose schemas & models
│   └── routes/              # Express route handlers
│
├── 📂 views/                # EJS templates
│   ├── admin/               # Admin panel views
│   ├── layouts/             # Shared page layouts
│   └── partials/            # Reusable UI components
│
├── app.js                   # App entry point
├── .env                     # Environment variables (not committed)
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# 2. Navigate into the project
cd your-repo-name

# 3. Install dependencies
npm install

# 4. Create your environment file
cp .env.example .env
```

### Environment Variables

Create a `.env` file at the root with the following:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/blog
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret
```

### Run the App

```bash
# Production
npm start

# Development (with hot reload)
npm run dev
```

Then open your browser at **http://localhost:3000** 🎉

---

## 📦 Dependencies

```json
{
  "bcrypt": "^6.0.0",
  "connect-mongo": "^6.0.0",
  "cookie-parser": "^1.4.7",
  "dotenv": "^17.3.1",
  "ejs": "^5.0.1",
  "express": "^5.2.1",
  "express-ejs-layouts": "^2.5.1",
  "express-session": "^1.19.0",
  "jsonwebtoken": "^9.0.3",
  "method-override": "^3.0.0",
  "mongoose": "^9.3.3"
}
```

---

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the server with Node.js |
| `npm run dev` | Start with Nodemon (auto-restart on changes) |

---

## 📄 License

This project is licensed under the **ISC License**.

---

<p align="center">Made with ❤️ using Node.js · Express · EJS · MongoDB</p>
