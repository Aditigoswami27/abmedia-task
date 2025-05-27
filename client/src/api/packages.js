import axios from 'axios';

const REACT_APP_API_BASE_URL = 'http://localhost:5000'; // Same backend URL

// Fetch all packages from backend API
export const fetchTopPackages = async () => {
  const res = await axios.get(`${REACT_APP_API_BASE_URL}/api/packages/top-selling`);
  return res.data;
};
