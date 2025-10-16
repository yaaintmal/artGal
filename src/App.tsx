import React, { useState } from "react";
import ArtworksDisplay from "./components/ArtworksDisplay";
import ArtworksList from "./components/ArtworksList";
import Creditz from "./components/Creditz";
import NavDock from "./components/NavDock";
import ArtworkDetails from "./components/ArtworkDetails";

// union typing for possible views/screens
export type AppView =
  | "featured"
  | "list"
  | "credits"
  | { view: "details"; id: number };

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>("featured");

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
        return <ArtworksDisplay />;
    }
  };

  return (
    <div className="flex justify-center">
      {/* setter func for navDoc yayay */}
      <NavDock
        activeView={typeof activeView === "string" ? activeView : "list"}
        setActiveView={navigateTo}
      />
      <div></div>
      <div className="min-h-screen w-full">{renderView()}</div>
    </div>
  );
};

export default App;
