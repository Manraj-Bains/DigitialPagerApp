import React from "react";

export default function DoneScreen({ onRestart }) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Enjoy your meal</h1>
        <p className="screen-subtitle">
          Thank you for using Digital Pager.
        </p>

        <button className="btn btn-primary" type="button" onClick={onRestart}>
          Back to start
        </button>
      </div>
    </section>
  );
}
