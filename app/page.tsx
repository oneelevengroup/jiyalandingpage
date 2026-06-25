import Image from "next/image";
import Reveal from "./Reveal";
import BookButton from "./BookButton";
import ConsultModal from "./ConsultModal";
import ConsultFab from "./ConsultFab";
import BeforeAfterGallery from "./BeforeAfterGallery";
import AboutSection from "./AboutSection";
import SiteFooter from "./SiteFooter";

type Treatment = { name: string; blurb: string };
type Category = {
  name: string;
  description: string;
  treatments: Treatment[];
};

const categories: Category[] = [
  {
    name: "Eye",
    description:
      "Oculofacial and oculoplastic expertise — eyelid, brow, and vision procedures that refresh and restore the eyes.",
    treatments: [
      { name: "Upper Blepharoplasty", blurb: "Lifts heavy, hooding skin on the upper lids to open and brighten the eyes." },
      { name: "Ptosis Repair", blurb: "Corrects a drooping upper eyelid to restore its natural position and field of vision." },
      { name: "Lower Blepharoplasty", blurb: "Smooths under-eye bags and puffiness for a well-rested appearance." },
      { name: "Eyelid Retraction Repair", blurb: "Restores eyelids that sit too high or low, including correction of prior surgery." },
      { name: "Canthoplasty / Canthopexy", blurb: "Tightens and reshapes the outer corner of the eye for support and contour." },
      { name: "Midface Lift", blurb: "Elevates the cheeks to restore youthful fullness to the midface." },
      { name: "Brow Lift", blurb: "Raises a heavy or sagging brow for a smoother, more open forehead." },
      { name: "Endoscopic Brow / Midface Lift", blurb: "Lifts the brow and cheeks through tiny, well-hidden incisions with minimal downtime." },
      { name: "Refractive Lens Exchange", blurb: "Replaces the eye's natural lens to reduce dependence on glasses." },
      { name: "Premium Cataract Surgery", blurb: "Advanced lens implants that sharpen vision while treating cataracts." },
      { name: "Dry Eye", blurb: "Comprehensive treatment to relieve chronic dry, irritated eyes." },
    ],
  },
  {
    name: "Face",
    description:
      "Surgical facial rejuvenation — from the deep plane facelift to contouring and resurfacing.",
    treatments: [
      { name: "Deep Plane Facelift", blurb: "Repositions deeper facial tissues for a natural, long-lasting lift." },
      { name: "Deep Neck Lift", blurb: "Redefines the neck and jawline by addressing the deeper neck structures." },
      { name: "Lip Lift", blurb: "Shortens the space between nose and lip to reveal a fuller upper lip." },
      { name: "Revision Facelift Surgery", blurb: "Refines or corrects the results of a previous facelift." },
      { name: "Fat Grafting", blurb: "Restores lost volume and contour using your own purified fat." },
      { name: "Laser Resurfacing / UltraClear", blurb: "Cold-fiber laser resurfacing for smoother, clearer, more even skin." },
    ],
  },
  {
    name: "Hair",
    description: "Natural, lasting hair restoration with advanced transplant techniques.",
    treatments: [
      { name: "FUE Hair Transplant", blurb: "Minimally invasive, follicle-by-follicle transplant with no linear scar." },
      { name: "FUT Hair Transplant", blurb: "Strip-harvest technique that maximizes graft yield in a single session." },
      { name: "Eyebrow Transplant", blurb: "Rebuilds sparse or over-plucked brows with living hair." },
    ],
  },
  {
    name: "Non-Surgical",
    description:
      "Injectables, lasers, and regenerative treatments to refresh and renew — no surgery required.",
    treatments: [
      { name: "IPL", blurb: "Intense pulsed light to even tone and reduce redness and sun damage." },
      { name: "Fillers", blurb: "Restores volume and smooths lines for a refreshed, natural look." },
      { name: "Biostimulators", blurb: "Stimulate your own collagen for gradual, long-lasting firmness." },
      { name: "Neurotoxins", blurb: "Relax fine lines and wrinkles for a smooth, refreshed expression." },
      { name: "Microneedling", blurb: "Stimulates collagen to refine texture, tone, and fine lines." },
      { name: "Regenerative Aesthetics", blurb: "PRF and regenerative therapies that harness your body to renew skin and hair." },
    ],
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow fade d1">Facial Cosmetic Surgery · Raleigh, NC</p>

          <span className="brand fade d2">
            <Image
              className="logo"
              src="/jiya-logo.png"
              alt="JIYA — Jindal Institute for Youthful Aging"
              width={1133}
              height={1294}
              priority
            />
            <span className="subbrand">Jindal Institute for Youthful Aging</span>
          </span>

          <p className="announce-date fade d3">Launching 7/15</p>
          <h1 className="headline fade d3">A refined new experience is on the way.</h1>

          <p className="tagline fade d4">
            Look better. See better. Feel better.
            <br />
            Luxury facial cosmetic surgery &amp; regenerative care.
          </p>

          <div className="hero-actions fade d5">
            <BookButton className="btn btn-primary">
              Book a Consultation
            </BookButton>
            <a className="btn btn-secondary" href="#contact">
              Contact Us
            </a>
          </div>
        </div>

        <a href="#services" className="scroll-cue fade d5" aria-label="Scroll to services">
          <span className="scroll-label">Scroll</span>
          <img src="/jiya-icon.png" alt="" width={36} height={36} />
        </a>
      </section>

      <section id="services" className="services">
        <div className="services-inner">
          <Reveal>
            <p className="section-eyebrow">What we do</p>
            <h2 className="section-title">Our Services</h2>
            <p className="section-lead">
              At JIYA Cosmetics in Raleigh, NC, we offer a full spectrum of
              facial cosmetic, oculofacial, and regenerative care — surgical
              artistry and non-surgical refinement under one roof.
            </p>
          </Reveal>

          <div className="menu">
            {categories.map((category) => (
              <Reveal key={category.name} className="cat">
                <h3 className="cat-name">
                  <img className="cat-icon" src="/jiya-icon.png" alt="" aria-hidden="true" />
                  {category.name}
                </h3>
                <p className="cat-desc">{category.description}</p>
                <ul className="svc-list">
                  {category.treatments.map((t) => (
                    <li className="svc" key={t.name}>
                      <span className="svc-name">{t.name}</span>
                      <span className="svc-leader" aria-hidden="true" />
                      <span className="svc-desc">{t.blurb}</span>
                    </li>
                  ))}
                </ul>
                <div className="cat-actions">
                  <BookButton className="btn btn-primary btn-sm">
                    Book a Consultation
                  </BookButton>
                  <a className="btn btn-secondary btn-sm" href="#contact">
                    Contact Us
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      <BeforeAfterGallery />

      <SiteFooter />

      <ConsultFab />

      <ConsultModal />
    </>
  );
}
