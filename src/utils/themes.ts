const THEMES = [
  "light",
  "dark",
  "cupcake",
  "lofi",
  "abyss",
  "corporate",
  "dracula",
];

export const getRandomTheme = () => {
  const randomIndex = Math.floor(Math.random() * THEMES.length);
  return THEMES[randomIndex];
};
