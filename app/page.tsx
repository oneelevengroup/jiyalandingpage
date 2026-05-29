import Image from "next/image";

export default function Home() {
  return (
    <main className="wrap">
      <p className="eyebrow fade d1">Facial Cosmetic Surgery · Raleigh, NC</p>

      <Image
        className="logo fade d2"
        src="/jiya-logo.png"
        alt="JIYA — Jindal Institute for Youthful Aging"
        width={1133}
        height={1294}
        priority
      />
      <p className="subbrand fade d2">Jindal Institute for Youthful Aging</p>

      <h2 className="headline fade d3">A refined new experience is on the way</h2>

      <p className="tagline fade d4">
        Look better. See better. Feel better.
        <br />
        Luxury facial cosmetic surgery &amp; regenerative care.
      </p>

      <div className="divider fade d4" />

      <div className="contact fade d5">
        <a href="tel:+19842753818">(984) 275-3818</a>
        <span className="addr">7901 ACC Blvd, Suite 201 · Raleigh, NC 27617</span>
        <a className="cta" href="tel:+19842753818">
          Book a Consultation
        </a>
      </div>
    </main>
  );
}
