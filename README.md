# 🌍 Wanderlust - Travel Listings Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://wander-lust-90sw.onrender.com/listings) 
[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/rakesh-mahapatro-456/wander-Lust)

---

## ✨ Overview

**Wanderlust** is a full-stack **Node.js & Express** travel listings platform for travel enthusiasts. Users can explore, create, and review travel listings with a **responsive interface styled using Bootstrap**.  

It features user authentication, image uploads with **Cloudinary**, location-based listings using **GeoJSON**, and a review system to share experiences.

---

## 🛠 Tech Stack

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/) 
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com/) 
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![Passport](https://img.shields.io/badge/Passport.js-34E1B4?logo=passport.js&logoColor=white)](http://www.passportjs.org/)  
[![EJS](https://img.shields.io/badge/EJS-611f69?logo=ejs&logoColor=white)](https://ejs.co/)  
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563d7c?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)  
[![Cloudinary](https://img.shields.io/badge/Cloudinary-0033cc?logo=cloudinary&logoColor=white)](https://cloudinary.com/)

---

## 🌟 Key Features

### 🔐 User Authentication
- Secure registration, login, and logout  
- Password hashing via Passport-Local-Mongoose  
- Persistent sessions with secure cookies  

### 🏞 Listings Management
- Create, read, update, and delete listings  
- Image uploads via Cloudinary  
- Location-based data with GeoJSON  
- Search & filter listings  

### ✍️ Reviews System
- Leave ratings and comments  
- Reviews linked to both users and listings  
- Automatic cleanup of orphaned reviews  

---

## 🗃 Data Models

**Listing**
- Title, description, price  
- Location & country  
- Cloudinary image URLs  
- GeoJSON coordinates  
- References to owner & reviews  

**Review**
- Rating & comment  
- References to author & listing  

**User**
- Username & hashed password  
- References to owned listings & reviews  

---

## 🔒 Security Features
- Environment variables for sensitive data  
- CSRF protection & input validation with **Joi**  
- Secure session cookies  
- Safe file upload handling  


## 📸 Screenshots

<div align="center">

<table>
  <tr>
    <td align="center">
      <b>Home Page</b><br>
      <img src="<https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253144/Screenshot_2025-08-15_at_15.31.26_l0mrrn.png>)" width="300" style="margin:10px"/>
    </td>
    <td align="center">
      <b>Listing Page</b><br>
      <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253146/Screenshot_2025-08-15_at_15.31.37_gbw3hk.png" width="300" style="margin:10px"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>Listing Map</b><br>
      <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253146/Screenshot_2025-08-15_at_15.31.57_rlj7pw.png" width="300" style="margin:10px"/>
    </td>
    <td align="center">
      <b>Review Section</b><br>
      <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253143/Screenshot_2025-08-15_at_15.44.33_vovlhe.png" width="300" style="margin:10px"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>Review & Map</b><br>
      <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253151/Screenshot_2025-08-15_at_15.44.51_w9upey.png" width="300" style="margin:10px"/>
    </td>
    <td align="center">
      <b>New Listing</b><br>
      <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253147/Screenshot_2025-08-15_at_15.42.43_xihets.png" width="300" style="margin:10px"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>Edit Listing</b><br>
      <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253144/Screenshot_2025-08-15_at_15.43.54_qlyn8j.png" width="300" style="margin:10px"/>
    </td>
    <td></td>
  </tr>
</table>

</div>
