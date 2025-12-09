import React, { useState } from "react";

// components
import NavDock from "./components/NavDock";

// pages
import ArtworksDisplay from "./pages/ArtworksDisplay";
import ArtworksList from "./pages/ArtworksList";
import Creditz from "./pages/Creditz";
import ArtworkDetails from "./pages/ArtworkDetails";

// importing themes &
import { getRandomTheme } from "./utils/themes";

const THEME_STORAGE_KEY = "daisyui-theme";

// union typing for possible views/screens
export type AppView =
  | "featured"
  | "list"
  | "credits"
  | { view: "details"; id: number };

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>("featured");

  // refac: using data-theme on highest div
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    let theme = sessionStorage.getItem(THEME_STORAGE_KEY);

    if (!theme) {
      theme = getRandomTheme();
      sessionStorage.setItem(THEME_STORAGE_KEY, theme);
      setCurrentTheme(theme);
    }
    return theme;
  });

  const navigateTo = (view: AppView) => {
    setActiveView(view);
  };
  // creating function to render correct comp based on the active view
  const renderView = () => {
    if (typeof activeView === "object" && activeView.view === "details") {
      return <ArtworkDetails artworkId={activeView.id} />;
    }

    switch (activeView) {
      case "list":
        return <ArtworksList navigateTo={navigateTo} />;
      case "credits":
        return <Creditz />;
      case "featured":
      default:
        // passing new prop
        return <ArtworksDisplay navigateTo={navigateTo} />;
    }
  };
  return (
    // refac: using data-theme on highest div > rendering with data-theme
    <div className="flex justify-center" data-theme={currentTheme}>
      {/* setter func for navDoc yayay */}
      <NavDock
        activeView={typeof activeView === "string" ? activeView : "list"}
        setActiveView={navigateTo}
      />

      <div className="min-h-screen w-full">{renderView()}</div>
    </div>
  );
};

export default App;
