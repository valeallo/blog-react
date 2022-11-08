import React, { useState, useEffect } from "react";

const usePost = (url, post) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    (e) => {
      (async () => {
        try {
          setLoading(true);

          const response = await fetch(url, {
            headers: {
              'Content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(post),
          });
          const res = await response.json();
          setData(res);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      })();
    },
    [url]
  );
  return { data, loading, error };
};

export default usePost;
