import { useState, useEffect } from "react";

/**
 * Custom hook for managing and persisting state in localStorage
 * @param {string} key - The localStorage key
 * @param {any} initialValue - The default value
 */
function useLocalStorage(key, initialValue) {
  // Initialize state from localStorage or with a default value
  const [value, setValue] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
    }
  });

  // Update localStorage whenever the value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;

