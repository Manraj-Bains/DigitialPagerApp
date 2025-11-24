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
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Guest details</h1>
        <p className="screen-subtitle">
          Tell the host who you are so they can find you when it&apos;s your
          turn.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Guest name */}
          <div className="field">
            <p className="field-label">Guest name</p>
            <input
              className="field-input"
              type="text"
              placeholder="Name for the wait list"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
            />
          </div>

          {/* Party size */}
          <div className="field">
            <p className="field-label">Party size</p>
            <input
              className="field-input"
              type="number"
              min="1"
              max="20"
              placeholder="Number of guests"
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
            />
          </div>

          {/* Car description (optional, trust-friendly) */}
          <div className="field">
            <p className="field-label">Car description (optional)</p>
            <p className="field-helper">
              Helps the host spot you faster. Example: &quot;blue Honda Civic&quot;.
              This stays only with the restaurant.
            </p>
            <input
              className="field-input"
              type="text"
              placeholder="e.g. blue Honda Civic"
              value={carInfo}
              onChange={(e) => setCarInfo(e.target.value)}
            />
          </div>

          <div className="card-actions">
            <button className="btn btn-primary" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
