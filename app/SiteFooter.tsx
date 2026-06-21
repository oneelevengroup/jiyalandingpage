import Reveal from "./Reveal";
import BookButton from "./BookButton";

export default function SiteFooter() {
  return (
    <footer id="contact" className="footer">
      <Reveal>
        <div className="divider" />
        <p className="footer-eyebrow">Now welcoming patients</p>
        <h2 className="footer-title">Contact Us</h2>
        <div className="contact">
          <a href="tel:+19199296006">(919) 929-6006</a>
          <a href="mailto:info@jiyacosmetic.com">info@jiyacosmetic.com</a>
          <span className="addr">7901 ACC Blvd, Suite 201 · Raleigh, NC 27617</span>
          <BookButton className="cta">Book a Consultation</BookButton>
        </div>
      </Reveal>
    </footer>
  );
}
