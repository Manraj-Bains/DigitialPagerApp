import React from "react";

export default function QueueConfirmScreen({
  guestName,
  partySize,
  carInfo,
  onConfirm,
}) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Confirm your spot</h1>
        <p className="screen-subtitle">
          Review your details before joining the queue.
        </p>

        <div className="pill">
          <span className="pill-dot" />
          <span>Est. wait · 25 minutes</span>
        </div>

        <p className="field-label">Your queue number</p>
        <p className="queue-number">#4</p>
        <p className="queue-subtext">Based on the current wait list.</p>
        <p className="queue-auto">Updates automatically.</p>

        <div className="meta-row meta-row--spaced">
          <span>Guest name</span>
          <span className="meta-value">{guestName || "—"}</span>
        </div>

        <div className="meta-row">
          <span>Party size</span>
          <span className="meta-value">{partySize || "—"}</span>
        </div>

        <div className="meta-row">
          <span>Car information</span>
          <span className="meta-value">
            {carInfo && carInfo.trim() ? carInfo : "Not provided"}
          </span>
        </div>

        {/* gives breathing room above CTA */}
        <div className="card-actions">
          <button
            className="btn btn-primary"
            type="button"
            onClick={onConfirm}
          >
            Confirm &amp; join queue
          </button>
        </div>
      </div>
    </section>
  );
}
