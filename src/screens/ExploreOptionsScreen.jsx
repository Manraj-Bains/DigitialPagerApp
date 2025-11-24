import React from "react";

export default function ExploreOptionsScreen({ onBackToStart }) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Other options nearby</h1>
        <p className="screen-subtitle">
          If this wait feels too long, here are a few nearby places and things
          you could do instead.
        </p>

        <div className="option-section">
          <p className="field-label">Restaurants with shorter waits</p>

          <div className="option-card">
            <div>
              <p className="option-title">Poke &amp; Grill</p>
              <p className="option-subtitle">4.7 ★ · casual · 3 min walk</p>
            </div>
            <span className="option-pill">No wait</span>
          </div>

          <div className="option-card">
            <div>
              <p className="option-title">Riverfront Bistro</p>
              <p className="option-subtitle">4.6 ★ · patio · 5 min walk</p>
            </div>
            <span className="option-pill">10–15 min</span>
          </div>
        </div>

        <div className="option-section" style={{ marginTop: 18 }}>
          <p className="field-label">Things to do while you wait</p>

          <div className="option-card">
            <div>
              <p className="option-title">Coffee at Corner Roasters</p>
              <p className="option-subtitle">Cozy seating · across the street</p>
            </div>
          </div>

          <div className="option-card">
            <div>
              <p className="option-title">Walk the seawall</p>
              <p className="option-subtitle">10–15 min loop nearby</p>
            </div>
          </div>
        </div>

        <div className="card-actions">
          <button
            className="btn btn-primary"
            type="button"
            onClick={onBackToStart}
          >
            Back to start
          </button>
        </div>
      </div>
    </section>
  );
}