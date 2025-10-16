import type { AppView } from "../App";

interface NavDockProps {
  activeView: "featured" | "list" | "credits";
  setActiveView: (view: AppView) => void;
}

export default function NavDock({ activeView, setActiveView }: NavDockProps) {
  // function to handle button click
  const handleClick = (view: "featured" | "list" | "credits") => {
    setActiveView(view);
  };

  // function to get button class
  const getButtonClass = (view: "featured" | "list" | "credits") => {
    return activeView === view ? "dock-active" : "dock";
  };

  return (
    <>
      <div className="dock">
        <button
          className={getButtonClass("featured")}
          onClick={() => handleClick("featured")}
        >
          {/* ⭐ Featured Today (using a Star/Favorite icon) */}
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></polygon>
            </g>
          </svg>
          <span className="dock-label capitalize">featured today</span>
        </button>

        <button
          className={getButtonClass("list")}
          onClick={() => handleClick("list")}
        >
          {/* 📋 List Overview (using a List icon) */}
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <rect
                x="3"
                y="4"
                width="18"
                height="4"
                rx="1"
                ry="1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></rect>
              <rect
                x="3"
                y="10"
                width="18"
                height="4"
                rx="1"
                ry="1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></rect>
              <rect
                x="3"
                y="16"
                width="18"
                height="4"
                rx="1"
                ry="1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></rect>
            </g>
          </svg>
          <span className="dock-label capitalize">list overview</span>
        </button>

        <button
          className={getButtonClass("credits")}
          onClick={() => handleClick("credits")}
        >
          {/* 💰 Creditz (using a Coin/Money icon) */}
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></circle>
              <path
                d="M16 8.5C16 7.67157 15.3284 7 14.5 7H12.5C11.6716 7 11 7.67157 11 8.5V11C11 11.8284 11.6716 12.5 12.5 12.5H15.5C16.3284 12.5 17 13.1716 17 14V15.5C17 16.3284 16.3284 17 15.5 17H12.5C11.6716 17 11 16.3284 11 15.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <line
                x1="12"
                y1="5"
                x2="12"
                y2="7"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></line>
              <line
                x1="12"
                y1="17"
                x2="12"
                y2="19"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></line>
            </g>
          </svg>
          <span className="dock-label capitalize">creditz</span>
        </button>
      </div>
    </>
  );
}
