import React from "react";

export default function MethodScreen({
  code,
  setCode,
  onConfirmScan,
  onEnterManually,
}) {
  const handleManualSubmit = (e) => {
    e.preventDefault();
    onEnterManually();
  };

  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Check-in method</h1>
        <p className="screen-subtitle">
          Scan the QR code at the host stand or enter the code printed on your
          ticket.
        </p>

        {/* Scan block */}
        <div className="method-block method-block--scan">
          <p className="field-label">Scan at the host stand</p>

          <div className="qr-box">
            <div className="qr-grid">
              <span className="qr-cell" />
              <span className="qr-cell" />
              <span className="qr-cell" />
              <span className="qr-cell" />
              <span className="qr-cell" />
              <span className="qr-cell" />
              <span className="qr-cell" />
              <span className="qr-cell" />
              <span className="qr-cell" />
            </div>
          </div>

          <p className="hint">Align the QR code within the frame above.</p>

          <button
            className="btn btn-primary"
            type="button"
            onClick={onConfirmScan}
          >
            Confirm scan
          </button>
        </div>

        <div className="divider">or</div>

        {/* Manual block */}
        <div className="method-block method-block--manual">
          <p className="field-label">Enter code manually</p>
          <form onSubmit={handleManualSubmit}>
            <input
              className="field-input"
              type="text"
              placeholder="Enter code from host stand"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <div className="card-actions">
              <button className="btn btn-secondary" type="submit">
                Enter manually
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
