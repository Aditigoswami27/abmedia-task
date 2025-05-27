import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Use your backend URL

export const fetchDestinations = async () => {
  const res = await axios.get(`${BASE_URL}/api/destinations`);
  return res.data;
};
