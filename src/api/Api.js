import axios from "axios";

export const fetchData = async (range) => {
    const url = import.meta.env.VITE_BASE_URL;
    try {
      const response = await axios.get(url);
      return response.data.values; 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };