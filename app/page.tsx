import Image from "next/image";
import Reveal from "./Reveal";

type Treatment = { name: string; blurb: string };
type Category = {
  name: string;
  description: string;
  treatments: Treatment[];
};

const categories: Category[] = [
  {
    name: "Eyes",
    description:
      "Oculofacial and oculoplastic expertise — eyelid, brow, and vision procedures that refresh and restore the eyes.",
    treatments: [
      { name: "Blepharoplasty", blurb: "Eyelid surgery that removes excess skin and fat for a refreshed, more youthful eye." },
      { name: "Upper Blepharoplasty", blurb: "Lifts heavy, hooding skin on the upper lids to open and brighten the eyes." },
      { name: "Lower Blepharoplasty", blurb: "Smooths under-eye bags and puffiness for a well-rested appearance." },
      { name: "Mini Blepharoplasty", blurb: "A conservative eyelid refresh with minimal tissue removal and quicker recovery." },
      { name: "Lower Blepharoplasty with Fat Transposition", blurb: "Repositions under-eye fat to soften hollows and dark circles." },
      { name: "Temporal Brow Lift", blurb: "Elevates the outer brow to reduce hooding and lift the eye area." },
      { name: "Eyelid Ptosis Repair", blurb: "Corrects a drooping upper eyelid to restore its natural position and the field of vision." },
      { name: "Entropion Repair", blurb: "Surgically corrects an inward-turning eyelid that rubs and irritates the eye." },
      { name: "Ectropion Repair", blurb: "Restores an outward-sagging lower eyelid to its proper position." },
      { name: "Canthoplasty", blurb: "Reshapes and tightens the outer corner of the eye for support and contour." },
      { name: "Canthopexy Revision Surgery", blurb: "Refines or corrects a previous canthopexy to restore eyelid position." },
      { name: "Canthopexy & Canthoplasty Surgery", blurb: "Combined tightening and reshaping of the eye's outer corner." },
      { name: "Canthopexy & Canthoplasty Revision Surgery", blurb: "Revision of prior corner-of-eye procedures for improved support and shape." },
      { name: "Laser Cataract Surgery", blurb: "Bladeless, laser-assisted removal of cataracts for clearer vision." },
      { name: "Premium Cataract Surgery", blurb: "Advanced lens implants that sharpen vision while treating cataracts." },
      { name: "Integrative Dry Eye Treatment", blurb: "Comprehensive therapies to relieve chronic dry, irritated eyes." },
    ],
  },
  {
    name: "Face",
    description:
      "Surgical and minimally invasive facial rejuvenation — from the deep plane facelift to skin tightening and contouring.",
    treatments: [
      { name: "Deep Plane Facelift & Necklift", blurb: "Repositions deeper facial tissues for a natural, long-lasting lift of the face and neck." },
      { name: "JIYA Vertical Rejuvenation", blurb: "Our signature vertical lift technique for a refreshed, never-pulled result." },
      { name: "Minimally Invasive Neck Lift", blurb: "Tightens the neck and jawline through small, discreet incisions." },
      { name: "Endoscopic Brow Lift", blurb: "Lifts the brow through tiny incisions for a smoother, more open forehead." },
      { name: "Endoscopic Brow & Midface Lift", blurb: "Elevates the brow and cheeks together to restore upper-face youthfulness." },
      { name: "Forehead Reduction", blurb: "Lowers a high hairline to bring the forehead into balance." },
      { name: "FaceTite", blurb: "Radiofrequency skin tightening and contouring with no major incisions." },
      { name: "Morpheus8", blurb: "Microneedling with radiofrequency to firm skin and refine texture." },
      { name: "Facial Fat Grafting", blurb: "Restores lost volume and contour using your own purified fat." },
      { name: "Facial Liposuction", blurb: "Sculpts the jawline and neck by removing stubborn pockets of fat." },
      { name: "Lip Lift", blurb: "Shortens the space between nose and lip to reveal a fuller upper lip." },
      { name: "Bullhorn Lip Lift", blurb: "A refined lip-lift technique that lifts and enhances the upper lip." },
    ],
  },
  {
    name: "Hair",
    description: "Robotic and NeoGraft hair restoration for natural, lasting fullness.",
    treatments: [
      { name: "Robotic Hair Transplant", blurb: "Precision robotic follicle harvesting for natural, dense results." },
      { name: "NeoGraft Hair Transplant", blurb: "Minimally invasive, no-scalpel FUE hair restoration." },
      { name: "Revision Hair Transplant", blurb: "Improves or corrects the results of a prior transplant." },
      { name: "Male Hair Transplant", blurb: "Restores a natural hairline and density for men." },
      { name: "Female Hair Transplant", blurb: "Addresses thinning and restores fullness for women." },
      { name: "Eyebrow Hair Transplant", blurb: "Rebuilds sparse or over-plucked brows with living hair." },
      { name: "Keravive Treatment", blurb: "A scalp facial that cleanses and nourishes for healthier hair." },
      { name: "Scalp Micropigmentation", blurb: "Tattooed micro-dots that mimic follicles for the look of fuller hair." },
    ],
  },
  {
    name: "MedSpa",
    description:
      "Non-surgical aesthetics and regenerative therapies — injectables, fillers, and PRF treatments that refresh and renew.",
    treatments: [
      { name: "Natural Facial Fillers", blurb: "Subtle filler placement to restore volume and balance the face." },
      { name: "Dermal Fillers", blurb: "Smooths lines and replenishes lost volume for a refreshed look." },
      { name: "Cheek Fillers", blurb: "Restores lift and contour to flat or hollow cheeks." },
      { name: "Lip Filler", blurb: "Adds soft, natural volume and definition to the lips." },
      { name: "Under Eye Filler", blurb: "Softens hollows and dark circles beneath the eyes." },
      { name: "Botox", blurb: "Relaxes fine lines and wrinkles for a smooth, refreshed expression." },
      { name: "Microneedling with PRF", blurb: "Microneedling paired with your own growth factors to renew the skin." },
      { name: "Platelet Rich Fibrin Facial", blurb: "A regenerative facial using your platelets to boost glow and healing." },
      { name: "PRF Hair Restoration", blurb: "Platelet-rich fibrin injections that stimulate natural hair growth." },
      { name: "Non-Surgical Hair Restoration", blurb: "Regenerative, no-surgery therapies to thicken thinning hair." },
      { name: "Nanofat Stem Cell Hair Restoration", blurb: "Uses refined fat-derived cells to revitalize hair follicles." },
    ],
  },
  {
    name: "UltraClear™",
    description: "Cold-fiber laser resurfacing for clearer, smoother, more even skin.",
    treatments: [
      { name: "Skin Resurfacing", blurb: "Cold-fiber laser resurfacing for smoother, clearer, more even skin." },
      { name: "UltraClear Surgical Scar Treatment", blurb: "Laser therapy that softens and blends surgical scars." },
      { name: "Photobiomodulation Therapy", blurb: "Light therapy that calms inflammation and speeds healing." },
    ],
  },
  {
    name: "IV Treatment",
    description:
      "Wellness and recovery infusions to replenish, brighten, and restore from within.",
    treatments: [
      { name: "NAD+ IV", blurb: "Cellular-energy infusion to support recovery, focus, and vitality." },
      { name: "Glutathione IV", blurb: "Antioxidant infusion that brightens skin and supports detox." },
      { name: "Vitamin C IV", blurb: "High-dose vitamin C to support immunity and radiance." },
      { name: "Myer's Cocktail IV", blurb: "A classic blend of vitamins and minerals for an all-around boost." },
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

          <p className="announce-date fade d3">New Site Debuting 7.1.26</p>
          <h1 className="headline fade d3">A refined new experience is on the way.</h1>

          <p className="tagline fade d4">
            Look better. See better. Feel better.
            <br />
            Luxury facial cosmetic surgery &amp; regenerative care.
          </p>

          <div className="hero-actions fade d5">
            <a className="btn btn-primary" href="tel:+19842753818">
              Book a Consultation
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Us
            </a>
          </div>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
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
