import React from "react";

export default function HostNotifiedScreen({ guestName, partySize, onShowDetails }) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Notification sent</h1>
        <p className="screen-subtitle">
          The host has been notified that you’re on your way.
        </p>

        <p className="field-label">Queue number</p>
        <p className="queue-number">#4</p>

        <div className="meta-row meta-row--spaced">
          <span>Guest name</span>
          <span className="meta-value">{guestName || "—"}</span>
        </div>

        <div className="meta-row">
          <span>Party size</span>
          <span className="meta-value">{partySize || "—"}</span>
        </div>

        <div className="card-actions">
          <button
            className="btn btn-primary"
            type="button"
            onClick={onShowDetails}
          >
            Show details
          </button>
        </div>
      </div>
    </section>
  );
}
