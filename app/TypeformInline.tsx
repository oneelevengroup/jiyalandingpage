"use client";

import { useEffect } from "react";

// Inline Typeform embed (loads the embed script once, renders the live form).
export default function TypeformInline() {
  useEffect(() => {
    if (document.getElementById("tf-embed-script")) return;
    const s = document.createElement("script");
    s.src = "https://embed.typeform.com/next/embed.js";
    s.id = "tf-embed-script";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return <div data-tf-live="01KTEJC9JNNFH5A0TPYDS3RZSC" className="tf-inline" />;
}
