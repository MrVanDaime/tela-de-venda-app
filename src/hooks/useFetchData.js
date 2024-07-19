import { useState, useEffect } from 'react';

const useFetchData = (endpoint) => {
  const apiUrl = 'https://backend-alpha-smoky.vercel.app/api/';
  const [data, setData] = useState([]);

  useEffect(() => {
    if (endpoint) {
      const fetchData = async () => {
        try {
          const res = await fetch(apiUrl + endpoint);
          const jsonData = await res.json();
          setData(jsonData);
        } catch (err) {
          throw new Error(err.message);
        }
      };

      fetchData();
    }
  }, [endpoint]);

  return data;
};

export default useFetchData;