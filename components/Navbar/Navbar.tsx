import Link from "next/link";
import "./Navbar.css";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Gauche : Titre de la marque */}
      <div className="signature">
        <Link href="/" className="title">
          The <span className="bee-span">Bee</span>hive
        </Link>
      </div>

      {/* Centre : Liens de navigation principal */}
      <ul className="nav-links">
        <li>
          <Link href="/story">Our Story</Link>
        </li>
        <li>
          <Link href="/shop" className="active">Shop</Link>
        </li>
        <li>
          <Link href="/provenance">Provenance</Link>
        </li>
      </ul>

      {/* Droite : Barre de recherche et actions utilisateur */}
      <div className="nav-actions">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Find your honey..." />
        </div>

        <Link href="/cart" className="action-icon">
          <FiShoppingCart />
        </Link>

        <Link href="/account" className="action-icon">
          <FiUser />
        </Link>
      </div>
    </nav>
  );
}