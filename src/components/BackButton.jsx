import React from "react";

export default function BackButton({ onBack }) {
  return (
    <button className="back-btn" onClick={onBack}>
      ←
    </button>
  );
}
