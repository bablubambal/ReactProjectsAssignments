// useFetchPosts.js
import { useState, useEffect } from 'react';

const useFetchPosts = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`This is an HTTP error: The status is ${response.status}`);
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchPosts;
