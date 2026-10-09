import { ArrowUpRight } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";

export default function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <Eyebrow>OPEN FOR GOOD CONVERSATIONS</Eyebrow>
      <h1>
        Let's make
        <br />
        <span>something.</span>
      </h1>
      <p className="inner-intro">
        Have an idea, want to collaborate, or just want to talk games? We'd
        love to hear from you.
      </p>
      <a
        className="button button-dark email-button"
        href="mailto:hello@nekolepon.com?subject=Hello%20Nekolepon"
      >
        HELLO@NEKOLEPON.COM
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      <p className="contact-small">COLLABORATIONS · PRESS · KIND WORDS</p>
    </main>
  );
}
