import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const request$ = fetch(url);
    request$
      .then(async (statusResp) => {
        let resp;
        if (statusResp.ok) {
          try {
            // in case if request was succeed and valid JSON data was returned
            resp = await statusResp.clone().json();
            return resp;
          } catch (e) {
            // in case if request was succeed but no JSON data was returned
            resp = await statusResp.text();
            return resp;
          }
        } else {
          throw new Error("Error occured");
        }
      })
      .then((res) => {
        // console.log(res);
        setData(res);
        setError(false);
      })
      .catch(() => {
        setData(null);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
