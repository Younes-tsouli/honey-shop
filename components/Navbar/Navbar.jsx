"use client";
import Link from "next/link";
import "./Navbar.css";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      {/* Logo */}
      <div className="signature">
        <Link href="/" className="title">
          The <span className="bee-span">Bee</span>hive
        </Link>
      </div>

      {/* Navigation principale */}
      <ul className="nav-links">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/shop" className={pathname === "/shop" ? "active" : ""}>
            Magasin
          </Link>
        </li>
        <li>
          <Link href="/story" className={pathname === "/story" ? "active" : ""}>
            Notre histoire
          </Link>
        </li>
      </ul>

      {/* Actions */}
      <div className="nav-actions">
        {pathname === "/shop" && (
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Trouver un miel..." />
          </div>
        )}

        <Link
          href="/cart"
          className={`action-icon${pathname === "/cart" ? " active" : ""}`}
          aria-label="Panier"
        >
          <FiShoppingCart />
          <span className="cart-badge">0</span>
        </Link>

        <Link
          href="/account"
          className={`action-icon${pathname === "/account" ? " active" : ""}`}
          aria-label="Mon compte"
        >
          <FiUser />
        </Link>
      </div>
    </nav>
  );
}