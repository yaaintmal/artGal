const THEMES = [
  "lofi",
  "wireframe",
  "halloween",
  "abyss",
  "corporate",
  "dark",
  "black",
];

export const getRandomTheme = () => {
  const randomIndex = Math.floor(Math.random() * THEMES.length);
  return THEMES[randomIndex];
};
