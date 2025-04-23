# 🚀 RUN.md

## 🗳️ Hybrid-Decentralized Voting System Using Ethereum Blockchain

This guide walks you through the full setup and execution of the project locally.

---

## ✅ Requirements

Make sure the following tools are installed:

- **Node.js** (v18.14.0): [Download](https://nodejs.org/dist/v18.14.0/)
- **Python** (v3.9): [Download](https://www.python.org/downloads/release/python-390/)
- **MySQL** (on port 3306)
- **Ganache**: [Download](https://trufflesuite.com/ganache/)
- **Metamask Extension**: [Download](https://metamask.io/download.html)

---

## 📦 Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Salaar-Saaiem/Hybrid-Decentralized-Voting-System-Using-Ethereum-Blockchain.git
cd Hybrid-Decentralized-Voting-System-Using-Ethereum-Blockchain
```

---

### 2. Ganache Setup

- Open **Ganache**.
- Create a workspace named **development**.
- In the workspace, **Add Project** and choose `truffle-config.js` from the project root.

---

### 3. Metamask Configuration

1. Open Metamask → Import accounts from Ganache using private keys.
2. Add Custom Network:
   - **Network Name:** Localhost 7575  
   - **RPC URL:** http://localhost:7545  
   - **Chain ID:** 1337  
   - **Currency Symbol:** ETH  

---

### 4. MySQL Setup

1. Open MySQL (CLI or GUI like Workbench).
2. Create the database and table:

```sql
CREATE DATABASE voter_db;

USE voter_db;

CREATE TABLE voters (
  voter_id VARCHAR(36) PRIMARY KEY NOT NULL,
  role ENUM('admin', 'user') NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

3. Insert dummy data (for testing):

```sql
INSERT INTO voters (voter_id, role, password) VALUES
('sample-id-1', 'admin', 'hashedpassword1'),
('sample-id-2', 'user', 'hashedpassword2');
```

---

### 5. Install Dependencies

#### Install Truffle globally

```bash
npm install -g truffle
```

#### Install Node.js dependencies

```bash
npm install
```

#### Install Python dependencies

```bash
cd Database_API
pip install fastapi mysql-connector-python pydantic python-dotenv uvicorn uvicorn[standard] PyJWT
cd ..
```

---

### 6. Environment Setup

Inside `Database_API/`, create a file named `.env` and add:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=voter_db
SECRET_KEY=your_secret_jwt_key
```

---

### 7. Compile and Migrate Smart Contracts

Start Ganache first.

```bash
truffle console
compile
.exit
truffle migrate
```

---

### 8. Bundle Frontend JavaScript

```bash
browserify ./src/js/app.js -o ./src/dist/app.bundle.js
```

---

### 9. Run the Application

#### Start Node.js server:

```bash
node index.js
```

#### In another terminal, start FastAPI server:

```bash
cd Database_API
uvicorn main:app --reload --host 127.0.0.1
```

---

## 🌐 Access the App

Open your browser and go to:
```
http://localhost:8080/
```

---

## 📁 Project Structure (Overview)

```
├── contracts/
│   └── Voting.sol
├── Database_API/
│   └── main.py
├── migrations/
│   └── 1_initial_migration.js
├── src/
│   ├── html/
│   ├── js/
│   └── css/
├── index.js
├── truffle-config.js
├── package.json
└── README.md
```

---

## ❗ Notes

- Make sure Ganache is running before migration.
- Ensure `.env` has correct DB credentials.
- Avoid using XAMPP's MySQL—prefer standalone installation.
- For testing passwords, use hashed values.

---

## 📽️ Demo

Watch the full working demo on YouTube (will be available shortly).

---
