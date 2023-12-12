import {useState, useEffect} from "react";
import axios from "axios";

export const FetchData = (apiUrl) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    FetchData();
  }, [apiUrl]);
  return {data, isLoading, error};
};
