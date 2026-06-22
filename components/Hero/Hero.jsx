import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Image de fond */}
      <div className="image-container">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHueOUa43-GlA1eEpm5wdV2USPDX5U5oR60Gwn0mm_06sHxUeg0Z3MDiCNhQuQDvjwfMDhp5FfcMs6WjIJuWMwxaxRTsAuGyJuOIoRvxfJ0PCldaGH2PU5S4St6PpOvrHE7WtRPa_owtnWEVSCP9tNiXyDaRJg48hlpvL3ig4bnHR3e-bQaB2OVCtankanW_D06NwE1qhDeQCOujrgrOKSoRJnzj38u6Um4EUuj3ec8uNuFaRoU9AZcwUBZxB4350fMLSemg3KNw"
          alt="Miel doré qui coule"
          className="hero-image"
        />
      </div>

      {/* Contenu principal */}
      <div className="hero-content">
        <p className="hero-eyebrow">Maroc · Berkane</p>

        <h1 className="hero-title">
          Miel pur<br />
          <em>&amp; local</em>
        </h1>

        <p className="hero-description">
          Découvrez nos variétés de miel artisanal, récoltées avec soin
          au cœur du Maroc, directement de la ruche à votre table.
        </p>

        <div className="buttons">
          <button className="btn shop-btn">Nos miels</button>
          <button className="btn histoir-btn">Notre histoire</button>
        </div>
      </div>

      {/* Badge flottant */}
      <div className="hero-badge" aria-hidden="true">
        <span className="hero-badge-num">100%</span>
        <span className="hero-badge-label">Naturel<br />&amp; pur</span>
      </div>
    </section>
  );
}