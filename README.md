# AB Media Frontend-Backend Integration Task

This project is built as part of the AB Media internship task. It demonstrates a simple responsive homepage that integrates a React frontend (MUI + React Query) with a Node.js + Express + MongoDB backend.

##  Features

- Fully responsive layout
- "Most Popular Destinations" and "Top-Selling Packages" sections
- Dynamic data fetched from backend using React Query
- Express APIs with mock MongoDB data
- MUI Components + Skeleton Loaders
- Code is modular, clean, and easy to understand

##  Tech Stack

- **Frontend**: React, React Query, Material UI, React Icons
- **Backend**: Node.js, Express.js, MongoDB Atlas
- **Tooling**: Git, VS Code, Unsplash for images

##  API Endpoints

- `GET /api/destinations` → Returns popular destinations
- `GET /api/packages/top-selling` → Returns top-selling tour packages

##  Setup Instructions

### Backend
bash
   cd server
   npm install
   npm start

### Frontend
bash 
   cd client
   npm install
   npm start

Make sure MongoDB Atlas is connected and IP is whitelisted.
