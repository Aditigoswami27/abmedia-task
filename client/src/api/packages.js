import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL; // Use your backend URL

// Fetch all packages from backend API
export const fetchTopPackages = async () => {
  const res = await axios.get(`${BASE_URL}/api/packages/top-selling`);
  return res.data;
};
