

# 🌍 Wanderlust – Travel Listings Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://wander-lust-90sw.onrender.com/listings)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/rakesh-mahapatro-456/wander-Lust)

---

## ✨ Overview

**Wanderlust** is a full-stack **Node.js & Express** travel listings application built for travel enthusiasts.
Users can **explore, create, and review** travel destinations with an intuitive, **mobile-friendly Bootstrap UI**.

It includes **secure authentication**, **image hosting with Cloudinary**, **location mapping via GeoJSON**, and a **review & rating system** to share travel experiences.

---

## 🛠 Tech Stack

| Technology                                | Purpose                      |
| ----------------------------------------- | ---------------------------- |
| [Node.js](https://nodejs.org/)            | Backend runtime              |
| [Express.js](https://expressjs.com/)      | Web application framework    |
| [MongoDB](https://www.mongodb.com/)       | NoSQL database               |
| [Passport.js](http://www.passportjs.org/) | Authentication middleware    |
| [EJS](https://ejs.co/)                    | Templating engine            |
| [Bootstrap](https://getbootstrap.com/)    | Responsive styling           |
| [Cloudinary](https://cloudinary.com/)     | Image hosting & optimization |

---

## 🌟 Features

### 🔐 User Authentication

* Register, login, and logout securely
* Password hashing with **Passport-Local-Mongoose**
* Persistent sessions with secure cookies

### 🏞 Listings Management

* Create, view, update, and delete travel listings
* Upload multiple images via **Cloudinary**
* Store geolocation data using **GeoJSON**
* Search & filter listings by location or name

### ✍️ Review System

* Leave ratings & comments on listings
* Link reviews to both users & listings
* Auto-delete orphaned reviews

---

## 📂 Data Models

**Listing**

* Title, description, price
* Location & country
* Cloudinary image URLs
* GeoJSON coordinates
* References to owner & reviews

**Review**

* Rating & comment
* References to author & listing

**User**

* Username & hashed password
* References to owned listings & reviews

---

## 🔒 Security Highlights

* Environment variables for sensitive credentials
* **Joi** for input validation
* CSRF protection
* Secure cookie handling
* Safe file upload processing

---

## 📸 Screenshots

<div align="center">

| Home Page                                                                                                                           | Listing Page                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
|  <img src="https://drive.google.com/uc?export=view&id=1kb-w1Sl8WPP7XcmmxNW4xF2ZzsCTa06a" width="300"/> | <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253146/Screenshot_2025-08-15_at_15.31.37_gbw3hk.png" width="300"/> |

| Listing Map                                                                                                                         | Review Section                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253146/Screenshot_2025-08-15_at_15.31.57_rlj7pw.png" width="300"/> | <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253143/Screenshot_2025-08-15_at_15.44.33_vovlhe.png" width="300"/> |

| Review & Map                                                                                                                        | New Listing                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253151/Screenshot_2025-08-15_at_15.44.51_w9upey.png" width="300"/> | <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253147/Screenshot_2025-08-15_at_15.42.43_xihets.png" width="300"/> |

| Edit Listing                                                                                                                        |   |
| ----------------------------------------------------------------------------------------------------------------------------------- | - |
| <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253144/Screenshot_2025-08-15_at_15.43.54_qlyn8j.png" width="300"/> |   |

</div>

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/rakesh-mahapatro-456/wander-Lust.git
cd wander-Lust
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Environment Variables

Create a `.env` file in the root with:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=mongodb://localhost:27017/wanderlust
SECRET=your_session_secret
```

### 4️⃣ Run the Application

```bash
npm start
```


