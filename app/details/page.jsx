import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./details.css";

export default function ProductDetails({ product }) {
  // Valeurs par défaut pour le développement
  const {
    name = "Miel Sauvage des Prairies",
    collection = "Collection Highland Meadows",
    price = 42,
    size = "350g Pot Artisanal",
    description = "Récolté dans les prairies sauvages de haute altitude, notre miel brut n'est jamais chauffé ni filtré, préservant les enzymes délicates et le pollen.",
    attributes = [
      { label: "Flore", value: "Florale" },
      { label: "Corps", value: "Délicat" },
      { label: "Zeste", value: "Agrumes" },
    ],
    badges = ["Bio-Certifié", "Source Pure"],
    img = "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
  } = product ?? {};

  return (
    <div className="pd-page">
      <Navbar />

      <main className="pd-main">
        {/* ── Colonne image ── */}
        <div className="pd-image-col">
          <div className="pd-image-wrap">
            <img src={img} alt={name} />
          </div>
        </div>

        {/* ── Colonne infos ── */}
        <div className="pd-info-col">

          <h1 className="pd-title">{name}</h1>

          <div className="pd-price-row">
            <span className="pd-price">{price} €</span>
            <span className="pd-size-tag">{size}</span>
          </div>

          <p className="pd-description">{description}</p>

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
