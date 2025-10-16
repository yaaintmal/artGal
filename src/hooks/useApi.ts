import { useState, useEffect } from "react";
import type { ArticApiResponse, ArtworkItem } from "../schemas/art";

interface ArticApiState {
  artworks: ArtworkItem[];
  isLoading: boolean;
  error: string | null;
}

interface FilterConfig {
  requiresDescription?: boolean;
}

export const useArticApi = (
  displayLimit: number = 10,

  // accepting opt filter config
  config: FilterConfig = {}
): ArticApiState => {
  const { requiresDescription = false } = config; // destructuring and defaulting

  const [state, setState] = useState<ArticApiState>({
    artworks: [],
    isLoading: true,
    error: null,
  });

  // what is the actual limit? 70? More seems to resolve in 403... like... always!?
  const fetchLimit = displayLimit + 30;

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

        // filter logic: must have image_id and title >> display comp
        let validArtworks = json.data.filter(
          (item) => item.image_id && item.title
        );
        // filter logic: must have description >> refac: 20 removed
        if (requiresDescription) {
          validArtworks = validArtworks.filter((item) => item.description);
        }

        // slicing according comp, here we fakn go!
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
  }, [apiUrl, displayLimit, requiresDescription]);

  return state;
};
