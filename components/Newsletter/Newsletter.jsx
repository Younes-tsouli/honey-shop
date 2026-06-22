'use client'
import React, { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription ici
    console.log("Email soumis :", email);
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-left">
        <span className="newsletter-tag">Rejoignez-nous</span>
        <h2 className="newsletter-title">
          Recevez nos actualités<br />&amp; offres exclusives
        </h2>
      </div>

      <div className="newsletter-right">
        <div className="newsletter-input-row" role="form" aria-label="Inscription newsletter">
          <input
            className="newsletter-email"
            type="email"
            placeholder="votre@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Adresse e-mail"
          />
          <button
            className="newsletter-submit"
            onClick={handleSubmit}
            type="button"
          >
            S'inscrire
          </button>
        </div>
        <span className="newsletter-note">
          Pas de spam. Désabonnement en un clic.
        </span>
      </div>
    </section>
  );
}