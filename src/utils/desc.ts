const getShortDescription = (description: string | null): string => {
  if (!description) return "No description available.";
  const cleanText = description.replace(/<[^>]*>/g, "");
  return cleanText.substring(0, 120) + (cleanText.length > 120 ? "..." : "");
};

export default getShortDescription;
