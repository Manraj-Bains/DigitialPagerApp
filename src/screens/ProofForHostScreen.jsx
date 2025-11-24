import React from "react";

export default function ProofForHostScreen({
  guestName,
  partySize,
  carInfo,
  queueNumber,
  onDone,
}) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Show this to the host</h1>
        <p className="screen-subtitle">
          This screen is your digital pager. Show it when your table is ready.
        </p>

        <p className="field-label">Your queue number</p>
        <p className="queue-number">#{queueNumber || 4}</p>

        <div className="meta-row meta-row--spaced">
          <span>Guest name</span>
          <span className="meta-value">{guestName || "—"}</span>
        </div>
        <div className="meta-row">
          <span>Party size</span>
          <span className="meta-value">{partySize || "—"}</span>
        </div>
        <div className="meta-row">
          <span>Car description</span>
          <span className="meta-value">
            {carInfo && carInfo.trim() ? carInfo : "Not provided"}
          </span>
        </div>

        <div className="card-actions">
          <button className="btn btn-primary" type="button" onClick={onDone}>
            Done
          </button>
        </div>
      </div>
    </section>
  );
}
