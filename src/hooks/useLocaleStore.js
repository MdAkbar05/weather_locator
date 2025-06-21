import { useEffect, useState } from "react";

export default function useLocaleStore(storageKey, initialValue) {
  const [storedValue, setStoredValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? initialValue
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(storedValue));
  }, [storageKey, storedValue]);

  return [storedValue, setStoredValue];
}
