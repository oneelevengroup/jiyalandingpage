import type { ReactNode } from "react";

// Opens the "Book a Consultation" Typeform as a native popup. Typeform's
// embed.js (loaded in the layout) binds the data-tf-popup attribute — this is
// the most reliable approach on mobile (no custom overlay / scroll lock).
export default function BookButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      data-tf-popup="ZJCdEhfD"
      data-tf-size="100"
    >
      {children}
    </button>
  );
}
