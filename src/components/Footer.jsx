import { Link } from "react-router-dom";
import Brand from "./Brand.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Brand />
      <span className="footer-note">MADE WITH A LITTLE EXTRA HEART. ♡</span>

      <nav className="footer-links" aria-label="Footer navigation">
        <Link to="/">HOME</Link>
        <Link to="/studio">ABOUT</Link>
        <Link to="/games">GAMES</Link>
        <Link to="/contact">CONTACT US ↗</Link>
      </nav>

      <span className="copyright">© NEKOLEPON {new Date().getFullYear()}</span>
    </footer>
  );
}
