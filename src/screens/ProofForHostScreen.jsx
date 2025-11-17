import React from "react";

export default function ProofForHostScreen({ guestName, partySize, onDone }) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Your details for the host</h1>
        <p className="screen-subtitle">
          Show this screen at the host stand so they can confirm your table.
        </p>

        <p className="field-label">Your queue number</p>
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
            onClick={onDone}
          >
            Done
          </button>
        </div>
      </div>
    </section>
  );
}
