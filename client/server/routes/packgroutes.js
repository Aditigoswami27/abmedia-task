import express from 'express';
import Package from '../models/package.js';

const router = express.Router();
// GET /top-selling - Fetch all packages from DB
router.get('/top-selling', async (req, res) => {
  try {
    const data = await Package.find();
    res.json(data);  // Send packages as JSON
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch packages' });   // Error fetching packages
  }
});

export default router;
