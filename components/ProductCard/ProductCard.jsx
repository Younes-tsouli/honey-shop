import React from "react";
import "./ProductCard.css";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.img} alt={product.name} loading="lazy" />

        <Link href="/details">
          <div className="product-overlay">
            <button className="product-overlay-btn">Voir les détails</button>
          </div>
        </Link>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-sub">{product.sub}</p>
        <div className="product-footer">
          <span className="product-price">{product.price} €</span>
          <button
            className="product-add-btn"
            aria-label={`Ajouter ${product.name} au panier`}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}
