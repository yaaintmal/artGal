import React from "react";
import type { ArtworkItem } from "../schemas/art";
import { getImageURL } from "../utils/image";

interface ArtworkItemCardProps {
  item: ArtworkItem;
}

const ArtworkItemCard: React.FC<ArtworkItemCardProps> = ({ item }) => {
  //*
  // TODO: REFAC cleanedDescription >> not working right now as expected /// refac 2: fixed in ArtworkDetails Whoop Whoop 🥳
  //*

  // const cleanedDescription = item.description
  //   ? item.description.replace(/<[^>]*>/g, "").substring(0, 150) + "..."
  //   : "No description available.";

  const imageUrl = getImageURL(item.image_id, "400"); // setting image size

  return (
    <div className="card border border-gray-300 rounded-lg p-4 shadow-xl bg-white h-full transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-2 text-blue-700">{item.title}</h2>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={item.thumbnail?.alt_text || `Image of ${item.title}`}
          className="w-full h-56 rounded-md mb-3 object-cover"
        />
      )}
    </div>
  );
};

export default ArtworkItemCard;
