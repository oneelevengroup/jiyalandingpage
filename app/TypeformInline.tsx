"use client";

import { useEffect, useRef } from "react";
import { TF_FORM_ID, fireConsultConversion, ensureTypeformScript } from "./typeform";

// Inline Typeform embed via the JS API so it can fire the Google Ads
// conversion on submit (never on page load).
export default function TypeformInline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
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

  return <div ref={ref} className="tf-inline" />;
}
