# Hybrid-Decentralized Voting System Using Ethereum Blockchain

## Project Description
This Hybrid-Decentralized voting system leverages the Ethereum blockchain to provide a secure, transparent, and tamper-proof voting platform. The system consists of smart contracts deployed on a local Ethereum blockchain, a Node.js backend server for serving the frontend and handling authentication, a Python FastAPI backend for database management, and a user-friendly frontend interface.

### Key Features:
- **Smart Contract Voting:**
  - Add candidates with name and party affiliation.
  - Set voting start and end dates to control the voting period.
  - Allow registered users to vote once during the voting period.
  - Track vote counts for each candidate on the blockchain.
  - Prevent double voting by tracking voter addresses.
  - 60sec session window for voting to prevent melicious activities

- **User Authentication and Roles:**
  - JWT-based authentication for secure access.
  - Role-based access control to differentiate between admin and voters.
  - Login system integrated with a MySQL database backend.

- **Frontend Interface:**
  - Responsive UI for login, voting, and admin functionalities.
  - Display of candidates, vote counts, and voting period.
  - Integration with MetaMask for blockchain interactions.

- **Backend Services:**
  - Node.js Express server serving static frontend files and handling authentication.
  - Python FastAPI backend managing database operations and voter information.
  - MySQL database for storing voter credentials and roles.

🚀 Features
🔐 Ethereum-based smart contracts for secure vote casting

🧠 Node.js backend for serving the frontend and managing authentication

⚡ FastAPI (Python) backend for efficient database operations

💻 User-friendly frontend interface for a smooth voting experience

🔄 Works on a local Ethereum blockchain (e.g., Ganache or Hardhat)

🛠️ Tech Stack
Blockchain: Ethereum, Solidity
Backend: Node.js, FastAPI (Python)
Frontend: HTML, CSS, JavaScript
Database: (Mention your DB here, e.g., SQLite, PostgreSQL)
Tools: Web3.js, Metamask, Ganache

## Prerequisites
- Node.js and npm
- Python 3.x [https://www.python.org/downloads/]
- MySQL server [https://dev.mysql.com/downloads/mysql/]
- Ganache (or any local Ethereum blockchain) running on port 7545 [https://archive.trufflesuite.com/ganache/]
- MetaMask browser extension [https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en]

## Setup Instructions
Please refer RUN.md for SETUP guidance

## Troubleshooting
- If you encounter issues connecting to the blockchain, verify Ganache is running on port 7545.
- For database connection errors, check your MySQL credentials and database status.
- Make sure environment variables are correctly set for both Node.js and Python environments.

## License
This project is a property of SAAIEM SALAAR and licensed under the ISC License.
>>>>>>> f918b06f1bac24186d5428118080d5e52909381a
