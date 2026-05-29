import Image from "next/image";
import Reveal from "./Reveal";

type Category = {
  name: string;
  description: string;
  treatments: string[];
};

const categories: Category[] = [
  {
    name: "Eyes",
    description:
      "Oculofacial and oculoplastic expertise — eyelid, brow, and vision procedures that refresh and restore the eyes.",
    treatments: [
      "Blepharoplasty",
      "Upper Blepharoplasty",
      "Lower Blepharoplasty",
      "Mini Blepharoplasty",
      "Lower Blepharoplasty with Fat Transposition",
      "Temporal Brow Lift",
      "Eyelid Ptosis",
      "Entropion",
      "Ectropion",
      "Canthoplasty Surgery",
      "Canthopexy Revision Surgery",
      "Canthopexy & Canthoplasty Surgery",
      "Canthopexy & Canthoplasty Revision Surgery",
      "Laser Cataract Surgery",
      "Premium Cataract Surgery",
      "Integrative Dry Eye",
    ],
  },
  {
    name: "Face",
    description:
      "Surgical and minimally invasive facial rejuvenation — from the deep plane facelift to skin tightening and contouring.",
    treatments: [
      "Deep Plane Facelift & Necklift",
      "JIYA Vertical Rejuvenation",
      "Minimally Invasive Neck Lift",
      "Endoscopic Brow Lift",
      "Endoscopic Brow & Midface Lift",
      "Forehead Reduction",
      "FaceTite",
      "Morpheus8",
      "Facial Fat Grafting",
      "Facial Liposuction",
      "Lip Lift",
      "Bullhorn Lip Lift",
    ],
  },
  {
    name: "Hair",
    description:
      "Robotic and NeoGraft hair restoration for natural, lasting fullness.",
    treatments: [
      "Robotic Hair Transplant",
      "NeoGraft Hair Transplant",
      "Revision Hair Transplant",
      "Male Hair Transplant",
      "Female Hair Transplant",
      "Eyebrow Hair Transplant",
      "Keravive Treatment",
      "Scalp Micropigmentation",
    ],
  },
  {
    name: "MedSpa",
    description:
      "Non-surgical aesthetics and regenerative therapies — injectables, fillers, and PRF treatments that refresh and renew.",
    treatments: [
      "Natural Facial Fillers",
      "Dermal Fillers",
      "Cheek Fillers",
      "Lip Filler",
      "Under Eye Filler",
      "Botox",
      "Microneedling with PRF",
      "Platelet Rich Fibrin Facial",
      "PRF Hair Restoration",
      "Non-Surgical Hair Restoration",
      "Nanofat Stem Cell Hair Restoration",
    ],
  },
  {
    name: "UltraClear™",
    description:
      "Cold-fiber laser resurfacing for clearer, smoother, more even skin.",
    treatments: [
      "Skin Resurfacing",
      "UltraClear Surgical Scar Treatment",
      "Photobiomodulation Therapy",
    ],
  },
  {
    name: "IV Treatment",
    description:
      "Wellness and recovery infusions to replenish, brighten, and restore from within.",
    treatments: ["NAD+ IV", "Glutathione IV", "Vitamin C IV", "Myer's Cocktail IV"],
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
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

          <h1 className="headline fade d3">A refined new experience is on the way</h1>

          <p className="tagline fade d4">
            Look better. See better. Feel better.
            <br />
            Luxury facial cosmetic surgery &amp; regenerative care.
          </p>
        </div>

        <a href="#services" className="scroll-cue fade d5" aria-label="Explore our services">
          <img src="/jiya-icon.png" alt="" width={36} height={36} />
        </a>
      </section>

      <section id="services" className="services">
        <div className="services-inner">
          <Reveal>
            <p className="section-eyebrow">What we do</p>
            <h2 className="section-title">Our Services</h2>
            <p className="section-lead">
              A full spectrum of facial cosmetic, oculofacial, and regenerative
              care — surgical artistry and non-surgical refinement under one roof.
            </p>
          </Reveal>

          <div className="menu">
            {categories.map((category, i) => (
              <Reveal key={category.name} className="cat" delay={(i % 2) * 120}>
                <h3 className="cat-name">{category.name}</h3>
                <p className="cat-desc">{category.description}</p>
                <ul className="cat-list">
                  {category.treatments.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <Reveal>
          <div className="divider" />
          <p className="footer-eyebrow">Now welcoming patients</p>
          <div className="contact">
            <a href="tel:+19842753818">(984) 275-3818</a>
            <span className="addr">7901 ACC Blvd, Suite 201 · Raleigh, NC 27617</span>
            <a className="cta" href="tel:+19842753818">
              Book a Consultation
            </a>
          </div>
        </Reveal>
      </footer>
    </>
  );
}
