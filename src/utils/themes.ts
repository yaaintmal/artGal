const THEMES = ["lofi", "wireframe", "corporate"];

export const getRandomTheme = () => {
  const randomIndex = Math.floor(Math.random() * THEMES.length);
  return THEMES[randomIndex];
};
