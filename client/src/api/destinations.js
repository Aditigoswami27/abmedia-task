import axios from 'axios';

const REACT_APP_API_BASE_URL = 'http://localhost:5000'; // Use your backend URL

// Fetch all destinations from backend API
export const fetchDestinations = async () => {
  const res = await axios.get(`${REACT_APP_API_BASE_URL}/api/destinations`);
  return res.data;
};
