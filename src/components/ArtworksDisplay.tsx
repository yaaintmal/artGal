import React from "react";
import { useArticApi } from "../hooks/useApi";
import LoadingSpinner from "./LoadingSpinner";
import { getImageURL } from "../utils/image";
import type { ArtworkItem } from "../schemas/art";
import TextPressure from "./TextPressure";
import type { AppView } from "../App";

const CAROUSEL_LIMIT = 11;

type ArtworksDisplayProps = {
  navigateTo: (view: AppView) => void;
};

const ArtworksDisplay: React.FC<ArtworksDisplayProps> = ({ navigateTo }) => {
  const { artworks, isLoading, error } = useArticApi(CAROUSEL_LIMIT);

  if (isLoading) {
    return (
      <div className="p-10 flex justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center flex items-center justify-center h-screen">
        <p className="text-error text-xl">🖌️ Error fetching data: {error}</p>
      </div>
    );
  }

  if (artworks.length === 0) {
    return (
      <div className="p-10 text-center flex items-center justify-center h-screen">
        <p className="text-base-content/70 text-xl">
          No suitable artworks found. Please check your network or API
          connection. 🎭
        </p>
      </div>
    );
  }

  return (
    <>
      <div>
        <TextPressure
          text="Our Awesome Artworks Gallery"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#242424"
          strokeColor="#222222"
          minFontSize={36}
        />
      </div>
      <h3 className="text-xl p-4 font-extrabold mb-6 text-primary  border-base-content/20 pb-2">
        found ({artworks.length} valid entries)
      </h3>
      <div className="min-h-screen font-sans flex items-start justify-center pt-4">
        <div className="w-full max-w-xl bg-base-100 shadow-lg rounded-xl overflow-hidden">
          <div className={"carousel w-full h-96 md:h-auto relative"}>
            {artworks.map((item: ArtworkItem, index: number) => {
              const imageUrl = getImageURL(item.image_id, "1680");
              const itemId = `item${index + 1}`;

              return (
                <div
                  key={item.id}
                  id={itemId}
                  className="carousel-item w-full relative cursor-pointer"
                >
                  <a
                    onClick={() => navigateTo({ view: "details", id: item.id })}
                    className="w-full h-full block"
                    aria-label={`View details for ${item.title}`}
                  >
                    <img
                      src={imageUrl}
                      alt={item.thumbnail?.alt_text || `Image of ${item.title}`}
                      className={`w-full h-full object-cover`}
                    />
                  </a>

                  <div className="absolute bottom-0 left-0 right-0 bg-secondary/69 p-4 text-neutral-content bg-neutral-focus bg-opacity-70">
                    <div className="text-2xl font-bold">{item.title}</div>
                    <div className="text-lg italic">
                      {item.artist_display.split("\n")[0]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex w-full justify-center gap-2 py-4 bg-base-200">
            {artworks.map((_, index) => {
              const itemId = `item${index + 1}`;
              return (
                <a
                  key={index}
                  href={`#${itemId}`}
                  className="btn btn-xs btn-circle btn-primary"
                >
                  {index + 1}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtworksDisplay;
