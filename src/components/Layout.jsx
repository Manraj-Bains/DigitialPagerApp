import React from "react";
import BackButton from "./BackButton";

export default function Layout({ children, toastMessage, showBack, onBack }) {
  return (
    <div className="app-shell">
      <div className="phone-frame">
        <header className="app-header">
          {/* LEFT: back arrow + logo */}
          <div className="app-header-left">
            {showBack && <BackButton onBack={onBack} />}

            <div className="app-logo">
              DIGITAL<span>PAGER</span>
            </div>
          </div>

          {/* RIGHT: time */}
          <div className="app-header-meta">Today · 7:42 PM</div>
        </header>

        <main className="app-main">{children}</main>

        {toastMessage && <div className="toast">{toastMessage}</div>}
      </div>
    </div>
  );
}
