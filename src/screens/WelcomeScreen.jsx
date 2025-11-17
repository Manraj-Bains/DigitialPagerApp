import React from "react";
import DpIcon from "../assets/digitalpager-icon.svg";

export default function WelcomeScreen({ onStart }) {
  return (
    <section className="screen">
      <div className="card welcome-card">
        <h1 className="screen-title">Welcome</h1>

        <div className="welcome-logo">
          <img
            src={DpIcon}
            alt="DigitalPager logo"
            className="welcome-logo-img"
          />
        </div>

        <p className="screen-subtitle">
          Welcome to the Digital Pager. Check in once and track your place in
          line without waiting at the host stand.
        </p>

        <div className="card-actions">
          <button
            className="btn btn-primary"
            type="button"
            onClick={onStart}
          >
            Start check-in
          </button>
        </div>
      </div>
    </section>
  );
}
