import React from "react";

export default function LiveQueueScreen({ onNotify, onSkip }) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Live queue</h1>
        <p className="screen-subtitle">
          Track your place in line in real time.
        </p>

        {/* Position + wait info */}
        <p className="field-label">Your position</p>
        <p className="queue-number">12</p>
        <p className="queue-subtext">in line</p>
        <p className="queue-auto">Updates automatically.</p>

        <div className="meta-row meta-row--spaced">
          <span>Estimated wait</span>
          <span className="meta-value">20–25 minutes</span>
        </div>

        {/* Notification concept block */}
        <div className="notify-card" style={{ marginTop: 16 }}>
          <p>
            Stay updated with notifications. Receive an alert when your table
            is ready so you don&apos;t need to keep checking the screen.
          </p>
        </div>

        <div className="card-actions">
          <button
            className="btn btn-primary"
            type="button"
            onClick={onNotify}
          >
            Enable notifications
          </button>

          <button
            className="btn btn-secondary"
            type="button"
            onClick={onSkip}
          >
            Skip for now
          </button>
        </div>

        {/* While you wait / better options */}
        <div className="option-section" style={{ marginTop: 20 }}>
          <p className="field-label">While you wait</p>

          <div className="option-card">
            <div>
              <p className="option-title">Corner Roasters</p>
              <p className="option-subtitle">Grab a coffee · across the street</p>
            </div>
          </div>

          <div className="option-card">
            <div>
              <p className="option-title">Poke &amp; Grill</p>
              <p className="option-subtitle">
                4.7 ★ · casual · 3 min walk · shorter wait
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
