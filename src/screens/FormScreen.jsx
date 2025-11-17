import React from "react";

export default function FormScreen({
  guestName,
  partySize,
  carInfo,
  setGuestName,
  setPartySize,
  setCarInfo,
  onSubmit,
}) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Check-in details</h1>
        <p className="screen-subtitle">
          Provide your details so the host can confirm your party.
        </p>

        <div className="field">
          <label className="field-label" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            className="field-input"
            placeholder="Enter your full name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="field-label" htmlFor="party">
            Party size
          </label>
          <p className="field-helper">Number of guests (e.g. 2, 3, 4)</p>
          <input
            id="party"
            className="field-input"
            placeholder="e.g. 3"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="field-label" htmlFor="car">
            Car information (optional)
          </label>
          <p className="field-helper">License plate or car model</p>
          <input
            id="car"
            className="field-input"
            placeholder="Optional"
            value={carInfo}
            onChange={(e) => setCarInfo(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" type="button" onClick={onSubmit}>
          Submit details
        </button>
      </div>
    </section>
  );
}
