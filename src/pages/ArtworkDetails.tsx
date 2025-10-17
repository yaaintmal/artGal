import React, { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { getImageURL } from "../utils/image";
import type { ArtworkItem } from "../schemas/art";
import TextPressure from "../components/TextPressure";

interface ArticItemState {
  item: ArtworkItem | null;
  isLoading: boolean;
  error: string | null;
}

// custom hook to fetch single item
const useSingleArtwork = (id: number): ArticItemState => {
  const [state, setState] = useState<ArticItemState>({
    item: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    if (!id) return;

    const fields =
      "id,title,artist_display,description,api_link,date_display,medium_display,thumbnail,image_id";
    const apiUrl = `https://api.artic.edu/api/v1/artworks/${id}?fields=${fields}`;

    const fetchData = async () => {
      try {
        setState({ item: null, isLoading: true, error: null });
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        // single item logic
        if (json.data && json.data.id) {
          setState({ item: json.data, isLoading: false, error: null });
        } else {
          throw new Error("Artwork not found.");
        }
      } catch (e) {
        const errorMessage =
          e instanceof Error ? e.message : "An unknown error occurred.";
        setState({ item: null, isLoading: false, error: errorMessage });
      }
    };

    fetchData();
  }, [id]);

  return state;
};

interface ArtworkDetailsProps {
  artworkId: number; // artwork ID
}

const ArtworkDetails: React.FC<ArtworkDetailsProps> = ({ artworkId }) => {
  const { item, isLoading, error } = useSingleArtwork(artworkId);

  if (isLoading) {
    return (
      <div className="p-10 flex justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-600 p-5 text-center">
        Failed to load details: {error}
      </p>
    );
  }

  if (!item) {
    return (
      <p className="text-gray-500 p-5 text-center">
        Artwork with ID {artworkId} not found.
      </p>
    );
  }

  const imageUrl = getImageURL(item.image_id, "1200");
  const cleanedDescription = item.description
    ? item.description.replace(/<[^>]*>/g, "")
    : "Description not available.";

  return (
    <>
      <div className="w-full max-w-4xl mx-auto shadow-xl rounded-lg my-8">
        <div className="text-2xl font-extrabold text-secondary">
          <div
            className="p-4"
            style={{ position: "relative", height: "192px" }}
          >
            <TextPressure
              text={item.title}
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor=""
              strokeColor=""
              minFontSize={36}
              className="text-primary/80"
            />
          </div>
        </div>
        <p className="text-xl italic p-4 mb-4 text-accent">
          {item.artist_display.split("\n")[0]}
        </p>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Image of ${item.title}`}
            className="w-2/3 mx-auto object-contain rounded-xl mb-4"
          />
        )}

        <div className="space-y-4 p-4">
          <h2 className="text-2xl font-bold border-b pb-1">Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">Date:</span> {item.date_display}
            </div>
            <div>
              <span className="font-semibold">Medium:</span>{" "}
              {item.medium_display}
            </div>
          </div>

          <h2 className="text-2xl font-bold border-b pb-1 pt-4">Description</h2>
          <p className="whitespace-pre-wrap">{cleanedDescription}</p>
        </div>

        <div className="p-4 mb-10">
          <a
            href={item.api_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary mb-4"
          >
            View AIC API DETAILS
          </a>
        </div>
      </div>
    </>
  );
};

export default ArtworkDetails;
