export interface ArtworkItem {
  id: number;
  title: string;
  artist_display: string;
  description: string | null;
  api_link: string;
  date_display: string;
  medium_display: string;
  image_id: string | null; // Necessary for constructing the image URL
  thumbnail: {
    lqip: string;
    alt_text: string;
  } | null;
}

export interface ArticApiResponse {
  data: ArtworkItem[];
  pagination: {
    next_url: string;
  };
}
