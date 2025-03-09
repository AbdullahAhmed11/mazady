import { useEffect, useState } from "react";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window) {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      query.addEventListener("change", () => {
        setDarkMode(query.matches);
      });
      setDarkMode(query.matches)
    }
  }, []);
  return darkMode;
}
