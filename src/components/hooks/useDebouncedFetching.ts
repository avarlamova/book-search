import { useEffect, useState } from "react";

export function useDebouncedFetching(value: string): string {
  const [debouncedQuery, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), 1000);
    return () => clearTimeout(handler);
  }, [value]);
  return debouncedQuery;
}
