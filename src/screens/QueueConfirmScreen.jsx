import React from "react";

export default function QueueConfirmScreen({
  guestName,
  partySize,
  carInfo,
  onConfirm,
  onCancel,
}) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Confirm your spot</h1>
        <p className="screen-subtitle">
          Review your details and the estimated wait time before joining the
          queue.
        </p>

        {/* Estimated wait – made more visually important */}
        <p className="field-label">Estimated wait</p>
        <div className="pill">
          <span className="pill-dot" />
          <span>25 minutes</span>
        </div>
        <p className="queue-subtext">Estimated based on the current wait list.</p>

        {/* Queue number – still clear, but a bit less dominant */}
        <p className="field-label" style={{ marginTop: 18 }}>
          Your queue number
        </p>
        <p className="queue-number">#4</p>
        <p className="queue-auto">Updates automatically.</p>

        {/* Guest details */}
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
          <button
            className="btn btn-primary"
            type="button"
            onClick={onConfirm}
          >
            Confirm &amp; join queue
          </button>

          <button className="btn btn-ghost" type="button" onClick={onCancel}>
            Cancel check-in
          </button>
        </div>
      </div>
    </section>
  );
}
