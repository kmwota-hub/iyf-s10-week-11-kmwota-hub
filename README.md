# Community Hub API

This project introduces **MongoDB integration, Mongoose models, CRUD operations, and authentication**.

---

## 📚 Lessons Covered
- **Task 21**: MongoDB + Mongoose
  - MongoDB Atlas / Local setup
  - Post & Comment models
  - CRUD operations
  - Relationships (Posts ↔ Comments)
- **Task 22**: Authentication + User System
  - User model with password hashing
  - Registration & login with JWT
  - Auth middleware (protect/restrict routes)
  - User ↔ Post relationship

---

## 🛠 Tech Stack
- **Node.js** + **Express**
- **MongoDB Atlas** / Local MongoDB
- **Mongoose**
- **JWT** for authentication
- **bcryptjs** for password hashing
- **dotenv** for environment variables

---

## ⚙️ Setup Instructions

1. **Clone repo**
   ```bash
   git clone https://github.com/kmwota-hub/iyf-s10-week-11-kmwota-hub.git
   cd iyf-s10-week-11-kmwota-hub


2. **Install dependencies**

 ```bash
 npm install

3. **Configure environment**
    Create a .env file:
    ```bash
    MONGODB_URI=your-mongodb-uri
    JWT_SECRET=supersecretkey
    JWT_EXPIRES_IN=7d
    PORT=3000
4. **Run Server**
  ```bash
  npm start
