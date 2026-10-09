import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Brand from "./Brand.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <div className="announcement">
        <span className="status-dot" />
        INDEPENDENT GAME STUDIO
        <span className="announcement-right">
          MADE WITH FEELING, IN INDONESIA ↗
        </span>
      </div>

      <header className="site-header">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          className={`nav-links ${isMenuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink end to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/studio" onClick={closeMenu}>About</NavLink>
          <NavLink to="/games" onClick={closeMenu}>Games</NavLink>
          <Link className="nav-cta" to="/contact" onClick={closeMenu}>
            Contact Us <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </nav>
      </header>
    </>
  );
}
