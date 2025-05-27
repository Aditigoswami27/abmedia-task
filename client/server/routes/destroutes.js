import express from 'express';
import Destination from '../models/destination.js';

const router = express.Router();
// GET / - Fetch all destinations from DB
router.get('/', async (req, res) => {
  try {
    const data = await Destination.find();
    res.json(data);   // Send destinations as JSON
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch destinations' });   // Error fetching destinations
  }
});

export default router;
