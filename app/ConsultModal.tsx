"use client";

import { useEffect, useState } from "react";

export default function ConsultModal() {
  const [open, setOpen] = useState(false);

  // Open on the global "open-consult" event dispatched by BookButton
  useEffect(() => {
    const openIt = () => setOpen(true);
    window.addEventListener("open-consult", openIt);
    return () => window.removeEventListener("open-consult", openIt);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock background scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Load the Typeform embed script once (it renders the [data-tf-live] form)
  useEffect(() => {
    if (document.getElementById("tf-embed-script")) return;
    const s = document.createElement("script");
    s.src = "https://embed.typeform.com/next/embed.js";
    s.id = "tf-embed-script";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div
      className={`consult-modal ${open ? "is-open" : ""}`}
      aria-hidden={!open}
      onClick={() => setOpen(false)}
    >
      <div
        className="consult-card"
        role="dialog"
        aria-modal="true"
        aria-label="Book a consultation"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="consult-close"
          aria-label="Close"
          onClick={() => setOpen(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="consult-body">
          <div data-tf-live="01KTEJC9JNNFH5A0TPYDS3RZSC" />
        </div>
      </div>
    </div>
  );
}
