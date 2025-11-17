import React from "react";

export default function MethodScreen({ onConfirmScan, onEnterCode }) {
  return (
    <section className="screen">
      <div className="card">
        <h1 className="screen-title">Check-In Method</h1>
        <p className="screen-subtitle">
          Scan the QR code at the host stand or enter the code printed on your ticket.
        </p>

        {/* QR area */}
        <p className="field-label">Scan QR code at the host stand</p>
        <div className="qr-box">
          <div className="qr-grid">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="qr-cell" />
            ))}
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

        <div className="divider">
          <span>or</span>
        </div>

        {/* Manual code card – matches your Figma */}
        <div className="field">
          <p className="field-label">Enter code manually</p>
          <div className="field">
            <input
              className="field-input"
              placeholder="Enter code here"
            />
          </div>
        </div>

        <button
          className="btn btn-secondary"
          type="button"
          onClick={onEnterCode}
        >
          Enter manually
        </button>
      </div>
    </section>
  );
}
