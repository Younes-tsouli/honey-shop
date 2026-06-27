import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ProductDetails.css";

export default function ProductDetails({ product }) {
  // Valeurs par défaut pour le développement
  const {
    name        = "Miel Sauvage des Prairies",
    collection  = "Collection Highland Meadows",
    price       = 42,
    size        = "350g Pot Artisanal",
    description = "Récolté dans les prairies sauvages de haute altitude, notre miel brut n'est jamais chauffé ni filtré, préservant les enzymes délicates et le pollen.",
    attributes  = [
      { label: "Flore",  value: "Florale"  },
      { label: "Corps",  value: "Délicat"  },
      { label: "Zeste",  value: "Agrumes"  },
    ],
    badges      = ["Bio-Certifié", "Source Pure"],
    img         = "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
  } = product ?? {};

  return (
    <div className="pd-page">
      <Navbar />

      <main className="pd-main">
        {/* ── Colonne image ── */}
        <div className="pd-image-col">
          {/* Badge circulaire */}
          <div className="pd-stamp" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="pd-stamp-svg">
              <defs>
                <path
                  id="circle-text"
                  d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
                />
              </defs>
              <text className="pd-stamp-text">
                <textPath href="#circle-text" startOffset="0%">
                  100% RAW • HIGHLAND MEADOWS •&nbsp;
                </textPath>
              </text>
            </svg>
            <span className="material-symbols-outlined pd-stamp-icon">eco</span>
          </div>

          <div className="pd-image-wrap">
            <img src={img} alt={name} />
          </div>
        </div>

        {/* ── Colonne infos ── */}
        <div className="pd-info-col">
          <span className="pd-collection">{collection}</span>

          <h1 className="pd-title">{name}</h1>

          <div className="pd-price-row">
            <span className="pd-price">{price} €</span>
            <span className="pd-size-tag">{size}</span>
          </div>

          <p className="pd-description">{description}</p>

          {/* Attributs */}
          <div className="pd-attributes">
            {attributes.map((attr) => (
              <div key={attr.label} className="pd-attr">
                <span className="pd-attr-label">{attr.label}</span>
                <span className="pd-attr-value">{attr.value}</span>
              </div>
            ))}
          </div>

          {/* Bouton panier */}
          <button className="pd-add-btn">
            <span className="material-symbols-outlined">shopping_bag</span>
            Ajouter au panier
          </button>

          {/* Badges de confiance */}
          <div className="pd-trust">
            {badges.map((b) => (
              <span key={b} className="pd-trust-badge">
                <span className="material-symbols-outlined">verified</span>
                {b}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}