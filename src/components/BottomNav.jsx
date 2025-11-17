import React from "react";

export default function BottomNav({ currentScreen, onNavigate, SCREENS }) {
  const items = [
    {
      id: SCREENS.WELCOME,
      label: "Home",
      iconClass: "nav-icon nav-icon--home",
    },
    {
      id: SCREENS.LIVE_QUEUE,
      label: "Queue",
      iconClass: "nav-icon nav-icon--queue",
    },
    {
      id: SCREENS.PROOF_FOR_HOST,   // <- details goes to the host-proof screen
      label: "Details",
      iconClass: "nav-icon nav-icon--details",
    },
  ];

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        {items.map((item) => {
          const active = currentScreen === item.id;

          return (
            <button
              key={item.id}
              type="button"
              className={`nav-item ${active ? "nav-item--active" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className={item.iconClass} aria-hidden="true" />
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
