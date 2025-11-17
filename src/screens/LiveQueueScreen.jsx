import React from "react";

export default function LiveQueueScreen({ onEnableNotifications }) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Live queue</h1>
        <p className="screen-subtitle">
          Track your place in line in real time.
        </p>

        <p className="field-label">Your position</p>
        <p className="queue-number">12</p>
        <p className="queue-subtext">in line</p>
        <p className="queue-auto">Updates automatically.</p>

        <div className="meta-row meta-row--spaced">
          <span>Estimated wait</span>
          <span className="meta-value">20–25 minutes</span>
        </div>

        <div className="notify-card">
          Stay updated with notifications. Receive an alert when your table is
          ready so you don’t need to keep checking the screen.
        </div>

        <button
          className="btn btn-primary"
          type="button"
          onClick={onEnableNotifications}
        >
          Enable notifications
        </button>

        <button
          className="btn btn-ghost"
          type="button"
        >
          Skip for now
        </button>
      </div>
    </section>
  );
}
