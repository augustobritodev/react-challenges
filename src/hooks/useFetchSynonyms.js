import { useState } from "react";

function useFetchSynonyms(url) {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function getData(word) {
    setIsLoading(true);
    fetch(`${url}?ml=${word}&max=10`)
      .then(response => response.json())
      .then(data => {
        setData(data.map(item => item.word));
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }

  return {
    data,
    isLoading,
    error,
    getData
  }
}

export default useFetchSynonyms;
