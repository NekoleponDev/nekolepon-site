import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow.jsx";

export default function ContactBand() {
  return (
    <section className="contact-section">
      <div className="contact-top">
        <Eyebrow>OPEN FOR GOOD CONVERSATIONS</Eyebrow>
        <span className="contact-coordinate">MAKERS OF WORLDS / ID</span>
      </div>

      <h2>
        Got a good
        <br />
        <span>feeling?</span>
      </h2>

      <div className="contact-bottom">
        <p>
          Ideas, collaborations, kind words, or just to say hi. Our inbox is
          always open.
        </p>
        <Link className="button button-dark contact-button" to="/contact">
          SAY HELLO <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <span className="contact-star" aria-hidden="true">✳</span>
      </div>
    </section>
  );
}
