import { useState, useEffect } from "react";

const FAVORITES_KEY = "ofaa_favorites";

// Custom hook to manage favorite artworks
// reurning obj w/ current favorites set and functions to check/toggle.

export const useFavorites = () => {
  // Initialize state from localStorage once, or default to an empty Set
  const [favorites, setFavorites] = useState<Set<number>>(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? new Set(JSON.parse(stored)) : new Set<number>();
    } catch (error) {
      console.error("Could not load favorites from localStorage:", error);
      return new Set<number>();
    }
  });

  // using side effect to sync state changes to localStorage >> remember: localStorage only stores strings, so convert the Set to an Array before stringifying
  useEffect(() => {
    try {
      localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(Array.from(favorites))
      );
    } catch (error) {
      console.error("Could not save favorites to localStorage:", error);
    }
  }, [favorites]); // re-run on fav change

  // checking artwork id
  const isFavorite = (id: number): boolean => {
    return favorites.has(id);
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(id)) {
        newFavorites.delete(id); // removing if present
      } else {
        newFavorites.add(id); // adding if not, what else!?
      }
      return newFavorites;
    });
  };

  return { favorites, isFavorite, toggleFavorite };
};
