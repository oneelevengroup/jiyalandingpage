import type { ReactNode } from "react";

// Opens the "Book a Consultation" Typeform. Rendered as a real link to the
// hosted form, with the data-tf-popup attributes so Typeform's embed.js
// (loaded in the layout) upgrades it to an in-page popup. If embed.js is slow
// to load, blocked, or fails to bind (common on mobile Safari), tapping still
// opens the hosted form instead of doing nothing — the button is never dead.
export default function BookButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      className={className}
      href="https://form.typeform.com/to/ZJCdEhfD"
      target="_blank"
      rel="noopener"
      data-tf-popup="ZJCdEhfD"
      data-tf-size="100"
    >
      {children}
    </a>
  );
}
