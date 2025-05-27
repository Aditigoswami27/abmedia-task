import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import destroutes from "./routes/destroutes.js";
import packgroutes from "./routes/packgroutes.js";
import seedData from "./seed/mockData.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/destinations", destroutes);
app.use("/api/packages", packgroutes);

app.get("/", (req, res) => res.send("Server is up & running!"));

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
    seedData(); // Call this only once when seeding
  })
  .catch((err) => console.error("❌ DB error:", err));
