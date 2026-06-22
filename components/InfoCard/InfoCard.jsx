import React from "react";
import "./InfoCard.css";

export default function InfoCard({ icon, title, description, num }) {
  return (
    <article className="info-card">
      <div className="card-icon-wrapper" aria-hidden="true">
        <span className="card-icon">{icon}</span>
      </div>

      <div className="card-body">
        {num && <p className="card-num">{num}</p>}
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>

      <span className="material-symbols-outlined card-arrow" aria-hidden="true">
        arrow_forward
      </span>
    </article>
  );
}