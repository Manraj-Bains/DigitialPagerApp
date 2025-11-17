import React from "react";

export default function NotifyScreen({ onAllow, onSkip }) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Allow notifications</h1>
        <p className="screen-subtitle">
          Turn on notifications so we can alert you as soon as your table is ready.
        </p>

        <button
          className="btn btn-primary"
          type="button"
          onClick={onAllow}
        >
          Allow notifications
        </button>

        <button
          className="btn btn-ghost"
          type="button"
          onClick={onSkip}
        >
          Not now
        </button>
      </div>
    </section>
  );
}
