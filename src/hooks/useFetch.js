import { useEffect, useState } from "react";

export function useFetch(fetcher) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetcher()
      .then(result => { if (active) setData(result); })
      .catch(err => { if (active) setError(err.message || "Something went wrong"); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [fetcher]);

  return { data, loading, error };
}