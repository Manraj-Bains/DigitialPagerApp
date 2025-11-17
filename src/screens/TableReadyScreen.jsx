import React from "react";

export default function TableReadyScreen({ onOnMyWay, onDoneWaiting }) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Your table is ready</h1>
        <p className="screen-subtitle">
          Please make your way to the host stand. Your table will be held briefly.
        </p>

        <button
          className="btn btn-primary"
          type="button"
          onClick={onOnMyWay}
        >
          I’m on my way
        </button>

        <button
          className="btn btn-ghost"
          type="button"
          onClick={onDoneWaiting}
        >
          Done waiting
        </button>
      </div>
    </section>
  );
}
