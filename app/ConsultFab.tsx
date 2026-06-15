"use client";

import { useEffect, useState } from "react";

export default function ConsultFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show once the user scrolls past most of the hero (next section in view)
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      className={`consult-fab ${visible ? "is-visible" : ""}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.dispatchEvent(new Event("open-consult"))}
    >
      <img src="/jiya-icon.png" alt="" width={22} height={22} />
      <span>Book a Consult</span>
    </button>
  );
}
