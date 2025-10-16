import { useState, useEffect } from "react";
import type { ArticApiResponse, ArtworkItem } from "../schemas/art";

interface ArticApiState {
  artworks: ArtworkItem[];
  isLoading: boolean;
  error: string | null;
}

export const useArticApi = (displayLimit: number = 10): ArticApiState => {
  const [state, setState] = useState<ArticApiState>({
    artworks: [],
    isLoading: true,
    error: null,
  });

  // buffering limit to ensure at least 11
  const fetchLimit = displayLimit + 5;

  const fields =
    "id,title,artist_display,description,api_link,date_display,medium_display,thumbnail,image_id";
  const apiUrl = `https://api.artic.edu/api/v1/artworks?limit=${fetchLimit}&fields=${fields}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((s) => ({ ...s, isLoading: true, error: null }));
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json: ArticApiResponse = await response.json();

        // filter logic as following:
        // - must have title, image_id, thumbnail, description
        // - description must be at least 20 characters

        const validArtworks = json.data.filter(
          (item) =>
            item.title &&
            item.image_id &&
            item.thumbnail &&
            item.description &&
            item.description.length > 20
        );

        setState((s) => ({
          ...s,
          artworks: validArtworks.slice(0, displayLimit),
          error: null,
        }));
      } catch (e) {
        const errorMessage =
          e instanceof Error ? e.message : "An unknown error occurred.";
        setState((s) => ({ ...s, artworks: [], error: errorMessage }));
      } finally {
        setState((s) => ({ ...s, isLoading: false }));
      }
    };

    fetchData();
  }, [apiUrl, displayLimit]);

  return state;
};
