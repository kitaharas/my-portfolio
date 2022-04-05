import { useCallback, useEffect, useState } from "react";

// type WidthPrefix = 'min' | 'max'

const createQuery = (width, prefix) => `(${prefix}-width: ${width}px)`;

export const useMediaQuery = (width, prefix = "min") => {
  const query = createQuery(width, prefix);
  const [matchQuery, setMatchQuery] = useState(matchMedia(query));

  const handleQueryListener = useCallback(
    () => setMatchQuery(matchMedia(query)),
    [query]
  );

  useEffect(() => {
    matchQuery?.addEventListener("change", handleQueryListener);
    return () => matchQuery?.removeEventListener("change", handleQueryListener);
  }, [handleQueryListener, query]);

  return matchQuery.matches;
};
