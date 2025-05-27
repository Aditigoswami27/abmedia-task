import express from 'express';
import Package from '../models/package.js';

const router = express.Router();

router.get('/top-selling', async (req, res) => {
  try {
    const data = await Package.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch packages' });
  }
});

export default router;
