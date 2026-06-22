import React from "react";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <p className="testimonial-stars">★★★★★</p>
      <span className="testimonial-quote-mark" aria-hidden="true">"</span>
      <blockquote className="testimonial-text">
        Un miel d'une qualité rare, au goût authentique. On sent vraiment
        la différence avec un produit industriel.
      </blockquote>
      <p className="testimonial-author">— Fatima Z., Casablanca</p>
    </div>
  );
}