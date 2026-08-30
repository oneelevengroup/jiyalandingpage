// Shared Typeform + Google Ads conversion config for the JS embeds.

export const TF_FORM_ID = "g4piiJ3d";
export const CONVERSION_SEND_TO = "AW-18406910212/0nrzCJady-ocEITSjMlE";

// Fire the Google Ads conversion. Only call this from a Typeform onSubmit
// callback — never on page load, or every visitor would count as a lead.
export function fireConsultConversion(): void {
  const g = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof g === "function") {
    g("event", "conversion", { send_to: CONVERSION_SEND_TO });
  }
}

// Load the Typeform embed script once.
export function ensureTypeformScript(): void {
  if (document.getElementById("tf-embed-script")) return;
  const s = document.createElement("script");
  s.src = "https://embed.typeform.com/next/embed.js";
  s.id = "tf-embed-script";
  s.async = true;
  document.body.appendChild(s);
}
