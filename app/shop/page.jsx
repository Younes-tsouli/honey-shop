"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import ProductCard from "@/components/ProductCard/ProductCard";

import "./shop.css";

/* =====================
   DONNÉES PRODUITS (mock)
   À remplacer par un fetch API / CMS
===================== */
const PRODUCTS = [
  {
    id: 1,
    name: "Miel Sauvage des Prairies",
    sub: "Brut & Non Filtré",
    price: 32,
    badge: "Récolte Limitée",
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80",
  },
  {
    id: 2,
    name: "Infusion Lavande Provençale",
    sub: "Infusion Botanique",
    price: 45,
    badge: null,
    img: "https://images.unsplash.com/photo-1558642891-54be180ea339?w=600&q=80",
  },
  {
    id: 3,
    name: "Miel de Jujubier",
    sub: "Monofloral — Berkane",
    price: 58,
    badge: "Récolte Limitée",
    img: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=600&q=80",
  },
  {
    id: 4,
    name: "Miel de Thym",
    sub: "Infusion Botanique",
    price: 42,
    badge: null,
    img: "https://images.unsplash.com/photo-1504387828636-abeb50778c0c?w=600&q=80",
  },
];

const TYPES = [
  { id: "raw", label: "Brut & Non Filtré" },
  { id: "botanical", label: "Infusions Botaniques" },
  { id: "honeycomb", label: "Rayons de Miel" },
];

const SORT_OPTIONS = [
  { value: "curated",    label: "Sélection Curatée" },
  { value: "price-asc",  label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "newest",     label: "Nouveautés" },
];

/* =====================
   PAGE SHOP
===================== */
export default function Shop() {
  const [maxPrice, setMaxPrice]   = useState(100);
  const [sortOption, setSortOption] = useState("curated");

  // Tri dérivé — calculé à chaque render, pas de state séparé
  const sortedProducts = [...PRODUCTS]
    .filter((p) => p.price <= maxPrice)
    .sort((a, b) => {
      switch (sortOption) {
        case "price-asc":  return a.price - b.price;
        case "price-desc": return b.price - a.price;
        case "newest":     return b.id - a.id;
        case "curated":
        default:           return a.id - b.id;
      }
    });

  const sliderProgress = ((maxPrice - 15) / (150 - 15)) * 100;

  return (
    <>
      <Navbar />

      <div className="shop-page">
        {/* ── Header centré ── */}
        <header className="shop-header">
          <span className="shop-header-eyebrow">Notre Collection</span>
          <h1 className="shop-header-title">Miel Artisanal &amp; Provisions</h1>
          <p className="shop-header-desc">
            Récoltés durablement dans des prairies sauvages et des vergers
            ensoleillés. Chaque pot préserve un moment particulier dans le
            temps.
          </p>
        </header>

        {/* ── Corps : sidebar + grille ── */}
        <div className="shop-body">
          {/* SIDEBAR */}
          <aside className="shop-sidebar">
            <p className="sidebar-title">Affiner l'Archive</p>

            {/* Type */}
            <div className="filter-group">
              <span className="filter-legend">Type</span>
              {TYPES.map((t) => (
                <div key={t.id} className="filter-option">
                  <input type="checkbox" id={`cb-${t.id}`} />
                  <label htmlFor={`cb-${t.id}`}>{t.label}</label>
                </div>
              ))}
            </div>

            {/* Prix */}
            <div className="filter-group">
              <span className="filter-legend">Tranche de Prix</span>
              <div className="price-range-row">
                <span>15 €</span>
                <span>{maxPrice} €</span>
              </div>
              <input
                type="range"
                className="price-slider"
                min={15}
                max={150}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{ "--progress": `${sliderProgress}%` }}
                aria-label="Prix maximum"
              />
            </div>
          </aside>

          {/* PRODUITS */}
          <section className="shop-products">
            {/* Barre de tri */}
            <div className="sorting-bar">
              <p className="sorting-results">{sortedProducts.length} résultats</p>
              <div className="sorting-right">
                <span className="sorting-label">Trier par :</span>
                <select
                  className="sorting-select"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  aria-label="Critère de tri"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grille */}
            <div className="products-grid">
              {sortedProducts.length > 0 ? (
                sortedProducts.map((p) => <ProductCard key={p.id} product={p} />)
              ) : (
                <div className="products-empty">
                  <p>Aucun produit ne correspond à vos filtres.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}