import { useState, useEffect } from "react";

export const useGetData = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(endpoint);
        const data = await res.json();
        setError(null);
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [endpoint]);
  return {
    data,
    isLoading,
    error,
  };
};
