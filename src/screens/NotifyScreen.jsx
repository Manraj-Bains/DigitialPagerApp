import React from "react";

export default function NotifyScreen({ onAllow, onSkip }) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Stay updated</h1>
        <p className="screen-subtitle">
          In a full version of DigitalPager you&apos;d be able to receive
          notifications when your table is ready, so you don&apos;t need to keep
          checking the screen.
        </p>

        <div className="notify-card">
          <p>
            This prototype doesn&apos;t send real notifications, but you can
            choose how you would prefer to be notified.
          </p>
        </div>

        <div className="card-actions">
          <button
            className="btn btn-primary"
            type="button"
            onClick={onAllow}
          >
            Continue with notifications
          </button>

          <button
            className="btn btn-secondary"
            type="button"
            onClick={onSkip}
          >
            I&apos;ll check the screen myself
          </button>
        </div>
      </div>
    </section>
  );
}
