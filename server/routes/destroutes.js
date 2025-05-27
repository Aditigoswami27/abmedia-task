import express from 'express';
import Destination from '../models/destination.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await Destination.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
});

export default router;
