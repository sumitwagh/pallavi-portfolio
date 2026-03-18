"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeCtx {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeCtx>({
  theme: "light",
  toggleTheme: () => {},
});

const STORAGE_KEY = "pallavi-theme"; // Must match the inline script in layout.tsx

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize from current <html> class to avoid any secondary flash
  const [theme, setTheme] = useState<Theme>(() => {
    // Server render: default light. Client: read the class already set by the inline script.
    if (typeof window === "undefined") return "light";
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  // Sync state with the class that was applied by the inline script
  useEffect(() => {
    const current: Theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(current);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";

      // Add transition class so the color change animates
      document.body.classList.add("theme-switching");

      // Toggle the .dark class on <html>
      document.documentElement.classList.toggle("dark", next === "dark");

      // Persist
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (_) {}

      // Remove transition class after animation
      window.setTimeout(() => {
        document.body.classList.remove("theme-switching");
      }, 300);

      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
