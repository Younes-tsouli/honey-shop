"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import "./cart.css";
import Link from "next/link";

const INITIAL_ITEMS = [
  {
    id: 1,
    name: "Miel Sauvage des Prairies",
    sub: "Brut & Non Filtré",
    size: "350g",
    price: 32,
    qty: 1,
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&q=80",
  },
  {
    id: 2,
    name: "Infusion Lavande Provençale",
    sub: "Infusion Botanique",
    size: "250g",
    price: 45,
    qty: 2,
    img: "https://images.unsplash.com/photo-1558642891-54be180ea339?w=300&q=80",
  },
  {
    id: 3,
    name: "Miel de Jujubier",
    sub: "Monofloral — Berkane",
    size: "500g",
    price: 58,
    qty: 1,
    img: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=300&q=80",
  },
];

function CartItem({ item, onQtyChange, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.img} alt={item.name} />
      </div>

      <div className="cart-item-info">
        <div className="cart-item-top">
          <div>
            <h3 className="cart-item-name">{item.name}</h3>
            <p className="cart-item-sub">
              {item.sub} · {item.size}
            </p>
          </div>
          <button
            className="cart-item-remove"
            onClick={() => onRemove(item.id)}
            aria-label={`Retirer ${item.name}`}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="cart-item-bottom">
          <div className="qty-control">
            <button
              className="qty-btn"
              onClick={() => onQtyChange(item.id, item.qty - 1)}
              aria-label="Diminuer"
              disabled={item.qty <= 1}
            >
              −
            </button>
            <span className="qty-value">{item.qty}</span>
            <button
              className="qty-btn"
              onClick={() => onQtyChange(item.id, item.qty + 1)}
              aria-label="Augmenter"
            >
              +
            </button>
          </div>
          <span className="cart-item-price">
            {(item.price * item.qty).toFixed(2)} €
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal >= 80 ? 0 : 5.9;
  const total = subtotal - discount + shipping;

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "BEEHIVE10") setPromoApplied(true);
  };

  return (
    <>
      <Navbar />
      <div className="cart-page">
        {/* ── Header ── */}
        <header className="cart-header">
          <span className="cart-header-eyebrow">Votre sélection</span>
          <h1 className="cart-header-title">Mon Panier</h1>
        </header>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span className="material-symbols-outlined cart-empty-icon">
              shopping_bag
            </span>
            <p className="cart-empty-title">Votre panier est vide</p>
            <p className="cart-empty-sub">
              Découvrez nos miels artisanaux et ajoutez vos favoris.
            </p>
            <a href="/shop" className="cart-empty-btn">
              Explorer le magasin
            </a>
          </div>
        ) : (
          <div className="cart-body">
            {/* ── Liste des articles ── */}
            <section className="cart-items">
              <div className="cart-items-header">
                <span>
                  {items.length} article{items.length > 1 ? "s" : ""}
                </span>
                <button className="cart-clear-btn" onClick={() => setItems([])}>
                  Vider le panier
                </button>
              </div>

              <div className="cart-items-list">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onQtyChange={updateQty}
                    onRemove={removeItem}
                  />
                ))}
              </div>

              {/* Livraison gratuite progress */}
              {shipping > 0 && (
                <div className="shipping-progress">
                  <p className="shipping-progress-text">
                    Plus que <strong>{(80 - subtotal).toFixed(2)} €</strong>{" "}
                    pour la livraison offerte
                  </p>
                  <div className="shipping-progress-bar">
                    <div
                      className="shipping-progress-fill"
                      style={{
                        width: `${Math.min((subtotal / 80) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              )}
              {shipping === 0 && (
                <div className="shipping-free-notice">
                  <span className="material-symbols-outlined">
                    local_shipping
                  </span>
                  Livraison offerte !
                </div>
              )}
            </section>

            {/* ── Récapitulatif ── */}
            <aside className="cart-summary">
              <h2 className="cart-summary-title">Récapitulatif</h2>

              <div className="cart-summary-lines">
                <div className="summary-line">
                  <span>Sous-total</span>
                  <span>{subtotal.toFixed(2)} €</span>
                </div>
                {promoApplied && (
                  <div className="summary-line summary-line--discount">
                    <span>Réduction (10%)</span>
                    <span>−{discount.toFixed(2)} €</span>
                  </div>
                )}
                <div className="summary-line">
                  <span>Livraison</span>
                  <span>
                    {shipping === 0 ? "Offerte" : `${shipping.toFixed(2)} €`}
                  </span>
                </div>
              </div>

              <div className="summary-divider" />

              <div className="summary-total">
                <span>Total</span>
                <span>{total.toFixed(2)} €</span>
              </div>

              {/* Code promo */}
              <div className="promo-row">
                <input
                  className="promo-input"
                  type="text"
                  placeholder="Code promo"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  disabled={promoApplied}
                  aria-label="Code promo"
                />
                <button
                  className="promo-btn"
                  onClick={applyPromo}
                  disabled={promoApplied}
                >
                  {promoApplied ? "✓" : "Appliquer"}
                </button>
              </div>
              {promoApplied && (
                <p className="promo-success">Code BEEHIVE10 appliqué !</p>
              )}

              <Link href="/checkout">
                <button className="checkout-btn">
                  <span className="material-symbols-outlined">lock</span>
                  Passer la commande
                </button>
              </Link>

              <div className="cart-trust">
                <span className="cart-trust-item">
                  <span className="material-symbols-outlined">verified</span>
                  Paiement sécurisé
                </span>
              </div>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}
