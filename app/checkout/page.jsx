"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import "./checkout.css";

const ORDER_ITEMS = [
  {
    id: 1,
    name: "Miel Sauvage des Prairies",
    sub: "Récolte Limitée · 350g",
    price: 32,
    qty: 1,
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=120&q=80",
  },
  {
    id: 2,
    name: "Infusion Lavande Provençale",
    sub: "Infusion Botanique · 250g",
    price: 45,
    qty: 2,
    img: "https://images.unsplash.com/photo-1558642891-54be180ea339?w=120&q=80",
  },
];

const STEPS = ["Coordonnées", "Paiement"];

export default function Checkout() {
  const [step, setStep] = useState(1); // 1 ou 2

  // Champs
  const [form, setForm] = useState({
    email: "",
    firstName: "", lastName: "",
    address: "", apartment: "",
    city: "", postal: "",
    cardNumber: "", expiry: "", cvv: "",
  });

  const set = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  // Formatage numéro carte
  const formatCard = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 16);
    const formatted = val.match(/.{1,4}/g)?.join(" ") ?? val;
    setForm((prev) => ({ ...prev, cardNumber: formatted }));
  };

  // Formatage expiry
  const formatExpiry = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 4);
    const formatted = val.length > 2 ? val.slice(0, 2) + "/" + val.slice(2) : val;
    setForm((prev) => ({ ...prev, expiry: formatted }));
  };

  const subtotal  = ORDER_ITEMS.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping  = subtotal >= 80 ? 0 : 5.9;
  const total     = subtotal + shipping;

  return (
    <>
      <Navbar />
      <div className="co-page">
        <div className="co-body">

          {/* ══ FORMULAIRE — gauche ══ */}
          <div className="co-form-col">
            {/* Titre + étapes */}
            <div className="co-form-header">
              <h1 className="co-title">Finaliser votre commande</h1>
              <div className="co-steps">
                {STEPS.map((label, i) => {
                  const n = i + 1;
                  return (
                    <React.Fragment key={label}>
                      <span className={`co-step${step === n ? " active" : step > n ? " done" : ""}`}>
                        {step > n
                          ? <span className="material-symbols-outlined co-step-check">check</span>
                          : n
                        }
                        {label}
                      </span>
                      {i < STEPS.length - 1 && <span className="co-step-sep" />}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {step === 1 && (
              <div className="co-section-group">
                {/* Contact */}
                <section className="co-section">
                  <span className="co-section-label">Informations de contact</span>
                  <div className="co-fields">
                    <div className="co-field co-field--full">
                      <input
                        className="co-input"
                        type="email"
                        placeholder="Adresse e-mail"
                        value={form.email}
                        onChange={set("email")}
                      />
                    </div>
                  </div>
                </section>

                {/* Livraison */}
                <section className="co-section">
                  <span className="co-section-label">Adresse de livraison</span>
                  <div className="co-fields">
                    <div className="co-field">
                      <input className="co-input" type="text" placeholder="Prénom" value={form.firstName} onChange={set("firstName")} />
                    </div>
                    <div className="co-field">
                      <input className="co-input" type="text" placeholder="Nom" value={form.lastName} onChange={set("lastName")} />
                    </div>
                    <div className="co-field co-field--full">
                      <input className="co-input" type="text" placeholder="Adresse" value={form.address} onChange={set("address")} />
                    </div>
                    <div className="co-field co-field--full">
                      <input className="co-input" type="text" placeholder="Appartement, suite, etc. (optionnel)" value={form.apartment} onChange={set("apartment")} />
                    </div>
                    <div className="co-field">
                      <input className="co-input" type="text" placeholder="Ville" value={form.city} onChange={set("city")} />
                    </div>
                    <div className="co-field">
                      <input className="co-input" type="text" placeholder="Code postal" value={form.postal} onChange={set("postal")} />
                    </div>
                  </div>
                </section>

                <button className="co-next-btn" onClick={() => setStep(2)}>
                  Continuer vers le paiement
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="co-section-group">
                {/* Récap adresse */}
                <div className="co-address-recap">
                  <div className="co-address-recap-row">
                    <span className="material-symbols-outlined">location_on</span>
                    <span>{form.address || "Adresse non renseignée"}{form.city ? `, ${form.city}` : ""}</span>
                  </div>
                  <button className="co-edit-link" onClick={() => setStep(1)}>Modifier</button>
                </div>

                {/* Paiement */}
                <section className="co-section">
                  <span className="co-section-label">Méthode de paiement</span>

                  <div className="co-payment-option active">
                    <span className="co-payment-radio" />
                    <span>Carte bancaire</span>
                    <span className="material-symbols-outlined co-payment-icon">credit_card</span>
                  </div>

                  <div className="co-card-fields">
                    <div className="co-field co-field--full co-field--icon">
                      <input
                        className="co-input"
                        type="text"
                        placeholder="Numéro de carte"
                        value={form.cardNumber}
                        onChange={formatCard}
                        maxLength={19}
                      />
                      <span className="material-symbols-outlined co-input-icon">lock</span>
                    </div>
                    <div className="co-field">
                      <input
                        className="co-input"
                        type="text"
                        placeholder="MM/AA"
                        value={form.expiry}
                        onChange={formatExpiry}
                        maxLength={5}
                      />
                    </div>
                    <div className="co-field">
                      <input
                        className="co-input"
                        type="text"
                        placeholder="CVV"
                        value={form.cvv}
                        onChange={(e) => setForm(p => ({ ...p, cvv: e.target.value.replace(/\D/g, "").slice(0, 4) }))}
                        maxLength={4}
                      />
                    </div>
                  </div>
                </section>

                <div className="co-actions">
                  <button className="co-back-btn" onClick={() => setStep(1)}>
                    <span className="material-symbols-outlined">arrow_back</span>
                    Retour
                  </button>
                  <button className="co-submit-btn">
                    <span className="material-symbols-outlined">lock</span>
                    Confirmer la commande · {total.toFixed(2)} €
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ══ RÉCAPITULATIF — droite ══ */}
          <aside className="co-summary">
            <h2 className="co-summary-title">Récapitulatif</h2>

            <div className="co-summary-items">
              {ORDER_ITEMS.map((item) => (
                <div key={item.id} className="co-summary-item">
                  <div className="co-summary-img-wrap">
                    <img src={item.img} alt={item.name} />
                    <span className="co-summary-qty">{item.qty}</span>
                  </div>
                  <div className="co-summary-item-info">
                    <p className="co-summary-item-name">{item.name}</p>
                    <p className="co-summary-item-sub">{item.sub}</p>
                  </div>
                  <span className="co-summary-item-price">
                    {(item.price * item.qty).toFixed(2)} €
                  </span>
                </div>
              ))}
            </div>

            <div className="co-summary-divider" />

            <div className="co-summary-lines">
              <div className="co-summary-line">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>
              <div className="co-summary-line">
                <span>Livraison</span>
                <span>{shipping === 0 ? "Offerte" : `${shipping.toFixed(2)} €`}</span>
              </div>
            </div>

            <div className="co-summary-divider" />

            <div className="co-summary-total">
              <span>Total</span>
              <div className="co-summary-total-right">
                <span className="co-summary-currency">EUR</span>
                <span className="co-summary-total-amount">{total.toFixed(2)} €</span>
              </div>
            </div>

            {/* Badges confiance */}
            <div className="co-trust-badges">
              <div className="co-trust-badge">
                <span className="material-symbols-outlined">lock</span>
                <span>Paiement sécurisé</span>
              </div>
              <div className="co-trust-badge">
                <span className="material-symbols-outlined">eco</span>
                <span>Bio certifié</span>
              </div>
              <div className="co-trust-badge">
                <span className="material-symbols-outlined">local_shipping</span>
                <span>Livraison neutre</span>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </>
  );
}