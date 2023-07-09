import { useState, useEffect } from 'react';

function useFetchEmail() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        setData(data.map(item => item.email))
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      })
  }, [])

  return {
    data,
    isLoading,
    error,
  }
}

export default useFetchEmail;
