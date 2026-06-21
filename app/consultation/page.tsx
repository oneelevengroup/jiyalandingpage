import Image from "next/image";
import type { Metadata } from "next";
import TypeformInline from "../TypeformInline";
import BeforeAfterGallery from "../BeforeAfterGallery";
import AboutSection from "../AboutSection";
import SiteFooter from "../SiteFooter";
import ConsultModal from "../ConsultModal";

export const metadata: Metadata = {
  title: "Book a Consultation — JIYA",
  description:
    "Request your consultation with JIYA — Jindal Institute for Youthful Aging. Facial cosmetic surgery & regenerative care in Raleigh, NC.",
};

export default function ConsultationPage() {
  return (
    <>
      <main className="lp">
        <header className="lp-head">
          <p className="eyebrow">Facial Cosmetic Surgery · Raleigh, NC</p>
          <Image
            className="lp-logo"
            src="/jiya-logo.png"
            alt="JIYA — Jindal Institute for Youthful Aging"
            width={1133}
            height={1294}
            priority
          />
          <h1 className="lp-title">Book Your Consultation</h1>
          <p className="lp-sub">
            Book your visit below. We can&rsquo;t wait to meet you.
          </p>
          <a className="lp-help" href="#contact">
            Need help? Contact us
          </a>
        </header>

        <section className="lp-form">
          <TypeformInline />
        </section>
      </main>

      <BeforeAfterGallery />

      <AboutSection />

      <SiteFooter />

      <ConsultModal />
    </>
  );
}
