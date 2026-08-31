import type { ReactNode } from "react";

// Opens the general inquiry Typeform as a native popup (Typeform's embed.js,
// loaded in the layout, binds the data-tf-popup attribute).
export default function ContactButton({
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
      data-tf-popup="OQrT6f0r"
      data-tf-size="100"
    >
      {children}
    </button>
  );
}
