import React from "react";
import { useArticApi } from "../hooks/useApi";
import { useFavorites } from "../hooks/useFavorites";
import LoadingSpinner from "./LoadingSpinner";
import { getImageURL } from "../utils/image";
import type { ArtworkItem } from "../schemas/art";
import type { AppView } from "../App";

const LIST_LIMIT = 70;

interface ArtworksListProps {
  navigateTo: (view: AppView) => void;
}

const getShortDescription = (description: string | null): string => {
  if (!description) return "No description available.";
  const cleanText = description.replace(/<[^>]*>/g, "");
  return cleanText.substring(0, 120) + (cleanText.length > 120 ? "..." : "");
};

const ArtworksList: React.FC<ArtworksListProps> = ({ navigateTo }) => {
  const { artworks, isLoading, error } = useArticApi(LIST_LIMIT, {
    requiresDescription: true,
  });

  const { isFavorite, toggleFavorite } = useFavorites();

  if (isLoading) {
    return (
      <div className="p-10 flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="text-error p-5">Error fetching list data: {error}</p>;
  }

  if (artworks.length === 0) {
    return (
      <p className="text-base-content/70 p-5">
        No artworks found for the list.
      </p>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-extrabold mb-6 text-primary border-b border-base-content/20 pb-2">
        Artwork Overview
      </h2>
      <h3 className="text-xl font-extrabold mb-6 text-primary  border-base-content/20 pb-2">
        found ({artworks.length} valid entries)
      </h3>

      <ul className="list bg-base-100 rounded-box shadow-xl divide-y divide-base-200">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide text-base-content/80">
          Artist / Title / Description
        </li>

        {artworks.map((item: ArtworkItem) => {
          const imageUrl = getImageURL(item.image_id, "94");
          const shortDescription = getShortDescription(item.description);
          const artistName =
            item.artist_display.split("\n")[0] || "Unknown Artist";
          const favorited = isFavorite(item.id);

          return (
            <li
              key={item.id}
              className="list-row flex items-center p-4 hover:bg-base-200 transition-colors duration-150"
            >
              {/* Image */}
              <div className="mr-4 flex-shrink-0">
                <img
                  className="size-10 rounded-box object-cover"
                  src={imageUrl}
                  alt={item.title}
                />
              </div>

              {/* Artist and Title */}
              <div className="w-48 mr-4 flex-shrink-0">
                <div className="font-bold text-sm text-primary">
                  {artistName}
                </div>
                <div className="text-xs uppercase font-semibold opacity-60 text-base-content">
                  {item.title}
                </div>
              </div>

              {/* Short Description */}
              <p className="list-col-wrap text-xs text-base-content/80 flex-grow mr-4">
                {shortDescription}
              </p>

              {/* Play Button */}
              <button
                className="btn btn-square btn-ghost flex-shrink-0"
                onClick={() => navigateTo({ view: "details", id: item.id })}
              >
                <svg
                  className="size-[1.2em] text-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M6 3L20 12 6 21 6 3z"></path>
                  </g>
                </svg>
              </button>

              {/* Heart/Favorite Button */}
              <button
                className={`btn btn-square btn-ghost flex-shrink-0`}
                onClick={() => toggleFavorite(item.id)}
              >
                <svg
                  className={`size-[1.2em] ${
                    favorited ? "text-error fill-error" : "text-accent"
                  }`} // fill if faved, otherwise just showing accent coz only accent and button are cool, ain't em? maybe secondary... forget the rest!
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill={favorited ? "currentColor" : "none"}
                    stroke="currentColor"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </g>
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArtworksList;
