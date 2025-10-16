// declaring a function to generate image URL from image_id >> thanks to API docs 🎉

export const getImageURL = (
  image_id: string | null,
  width: string = "1200"
) => {
  if (!image_id) return "";
  // Standard IIIF pattern: {base_url}/{image_id}/full/{width},/0/default.jpg
  return `https://www.artic.edu/iiif/2/${image_id}/full/${width},/0/default.jpg`;
};
