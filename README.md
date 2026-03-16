<div align="center">

```
██╗    ██╗ █████╗ ███╗   ██╗██████╗ ███████╗██████╗ ██╗     ██╗   ██╗███████╗████████╗
██║    ██║██╔══██╗████╗  ██║██╔══██╗██╔════╝██╔══██╗██║     ██║   ██║██╔════╝╚══██╔══╝
██║ █╗ ██║███████║██╔██╗ ██║██║  ██║█████╗  ██████╔╝██║     ██║   ██║███████╗   ██║
██║███╗██║██╔══██║██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗██║     ██║   ██║╚════██║   ██║
╚███╔███╔╝██║  ██║██║ ╚████║██████╔╝███████╗██║  ██║███████╗╚██████╔╝███████║   ██║
 ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚══════╝   ╚═╝
```

**MVC travel listings platform — geospatial data, image pipeline, session auth**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Passport.js](https://img.shields.io/badge/Passport.js-34E1B4?style=flat-square&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-0033cc?style=flat-square&logo=cloudinary&logoColor=white)

🌐 **[Live Demo](https://wander-lust-90sw.onrender.com/listings)**

</div>

---

## `$ cat overview.txt`

Wanderlust is a full-stack MVC travel listings app. Built around clean server-rendered patterns with geospatial data storage via LocationIQ geocoding, a Cloudinary image upload pipeline, Passport-Local-Mongoose session auth, and referential integrity through cascading deletes.

```
  POST /listings  →  Joi validation → Cloudinary upload → LocationIQ geocode
                                              │
                              ┌───────────────┴───────────────┐
                        image { url, filename }          GeoJSON coords
                        stored in MongoDB                stored in MongoDB
                              │                                │
                        served via CDN               MapLibre + MapTiler
                                                      renders map on page
```

---

## `$ cat features.txt`

### 🔐 Authentication (Passport-Local-Mongoose)
```
POST /signup    →  create user + hash password
POST /login     →  validate + create session (secure cookie)
GET  /logout    →  destroy session

Session middleware on every protected route
Unauthorized   → redirect to /login
```

### 🏞 Listings (Full CRUD)
```
GET    /listings       →  all listings
GET    /listings/:id   →  single listing + map
POST   /listings       →  create (auth required + Joi validation)
PUT    /listings/:id   →  update (owner only)
DELETE /listings/:id   →  delete + cascade reviews (owner only)
```

### 📍 Geospatial Data
```
Create listing → LocationIQ geocoding API → GeoJSON coordinates
                                                  │
                                       stored in MongoDB
                                                  │
                              rendered as interactive map
                              via MapLibre GL + MapTiler tiles
```

### 🖼 Cloudinary Image Pipeline
```
Upload form → multer-storage-cloudinary (single image)
                          │
              { url, filename } → MongoDB
                          │
              served via Cloudinary CDN
```

### ✍️ Review System
```
POST   /listings/:id/reviews            →  add review (auth required)
DELETE /listings/:id/reviews/:reviewId  →  delete (author only)

Cascade: listing deleted → all linked reviews auto-removed
         (referential integrity via Mongoose middleware)
```

### 📊 Data Models
```
Listing
  ├── title, description, price
  ├── location, country
  ├── image: { url, filename }   ← Cloudinary (single image)
  ├── geometry: GeoJSON          ← LocationIQ coords
  ├── owner: ref → User
  └── reviews: [ref → Review]

Review
  ├── rating, comment
  └── author: ref → User

User
  ├── username, email
  └── hash + salt (Passport-Local-Mongoose)
```

---

## `$ cat stack.txt`

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  BACKEND                                                        │
│  Node.js · Express              →  MVC server (port 8080)     │
│  MongoDB + Mongoose             →  data modeling               │
│  Passport-Local-Mongoose        →  session auth                │
│  multer-storage-cloudinary      →  image upload pipeline       │
│  LocationIQ API                 →  geocoding → GeoJSON         │
│  Joi                            →  input validation            │
│  EJS                            →  server-side templating      │
│                                                                 │
│  FRONTEND                                                       │
│  Bootstrap    →  responsive UI                                 │
│  MapLibre GL  →  interactive listing maps                      │
│  MapTiler     →  map tiles                                     │
│                                                                 │
│  DEPLOYMENT                                                     │
│  App + DB  →  Render + MongoDB Atlas                           │
│  Images    →  Cloudinary CDN                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## `$ ls -la screenshots/`

<div align="center">

| Home | Listing |
|---|---|
| <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253146/Screenshot_2025-08-15_at_15.31.37_gbw3hk.png" width="300"/> | <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253146/Screenshot_2025-08-15_at_15.31.37_gbw3hk.png" width="300"/> |

| Map | Reviews |
|---|---|
| <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253146/Screenshot_2025-08-15_at_15.31.57_rlj7pw.png" width="300"/> | <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253143/Screenshot_2025-08-15_at_15.44.33_vovlhe.png" width="300"/> |

| New Listing | Edit Listing |
|---|---|
| <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253147/Screenshot_2025-08-15_at_15.42.43_xihets.png" width="300"/> | <img src="https://res.cloudinary.com/dqz5xgr5v/image/upload/v1755253144/Screenshot_2025-08-15_at_15.43.54_qlyn8j.png" width="300"/> |

</div>

---

## `$ cat security.txt`

```
✓  Passport-Local-Mongoose   →  password hash + salt, no plaintext
✓  Session cookies            →  httpOnly: true
✓  Joi validation             →  listing + review write routes validated
✓  Owner-only mutations      →  edit/delete guarded by authorship check
⚠  Environment variables      →  intended via .env — remove hardcoded
                                  credentials in init/index.js before deploy
```

---

## `$ cat setup.txt`

```bash
git clone https://github.com/rakesh-mahapatro-456/wander-Lust.git
cd wander-Lust
npm install
```

Create `.env`:
```env
ATLASDB_URL=your_mongodb_atlas_url
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
LOCATIONIQ_API_KEY=your_locationiq_key
MAPTILER_API_KEY=your_maptiler_key
```

```bash
node app.js
# App running at http://localhost:8080
# (or add "start": "node app.js" to package.json scripts)
```

---

<div align="center">

```
$ echo $BUILT_WITH
  Node.js · Express · MongoDB · Passport.js · Cloudinary · LocationIQ · MapLibre
  Built with ❤️
```

</div>
