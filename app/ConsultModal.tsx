"use client";

import { useEffect, useRef, useState } from "react";
import { TF_FORM_ID, fireConsultConversion, ensureTypeformScript } from "./typeform";

export default function ConsultModal() {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

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

  // Build the Typeform widget once, with the conversion on submit
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    ensureTypeformScript();
    let done = false;
    const poll = window.setInterval(() => {
      const tf = (window as unknown as { tf?: { createWidget?: Function } }).tf;
      if (done || !tf?.createWidget) return;
      done = true;
      window.clearInterval(poll);
      el.innerHTML = "";
      tf.createWidget(TF_FORM_ID, {
        container: el,
        onSubmit: fireConsultConversion,
      });
    }, 120);
    const stop = window.setTimeout(() => window.clearInterval(poll), 10000);
    return () => {
      window.clearInterval(poll);
      window.clearTimeout(stop);
    };
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
        <div className="consult-body" ref={bodyRef} />
      </div>
    </div>
  );
}
