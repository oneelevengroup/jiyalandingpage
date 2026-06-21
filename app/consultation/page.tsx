import Image from "next/image";
import type { Metadata } from "next";
import TypeformInline from "../TypeformInline";

export const metadata: Metadata = {
  title: "Book a Consultation — JIYA",
  description:
    "Request your consultation with JIYA — Jindal Institute for Youthful Aging. Facial cosmetic surgery & regenerative care in Raleigh, NC.",
};

export default function ConsultationPage() {
  return (
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
          Tell us a little about you and our team will reach out to schedule
          your visit.
        </p>
      </header>

      <section className="lp-form">
        <TypeformInline />
      </section>
    </main>
  );
}
