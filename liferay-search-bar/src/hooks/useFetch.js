import React from 'react';

const useFetch = () => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) {
        if(json.message) throw new Error(json.message);
        else throw new Error(response.status)
      }
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setLoading(false);
      return { response, json };
    }
  }, []);

  return {
    loading,
    setLoading,
    error,
    request,
  };
};

export default useFetch;
