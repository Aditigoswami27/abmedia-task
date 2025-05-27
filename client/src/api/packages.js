import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Same backend URL

export const fetchTopPackages = async () => {
  const res = await axios.get(`${BASE_URL}/api/packages/top-selling`);
  return res.data;
};
