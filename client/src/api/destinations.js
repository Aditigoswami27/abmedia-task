import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL; // Use your backend URL

// Fetch all destinations from backend API
export const fetchDestinations = async () => {
  const res = await axios.get(`${BASE_URL}/api/destinations`);
  return res.data;
};
