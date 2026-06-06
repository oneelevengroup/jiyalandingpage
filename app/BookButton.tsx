"use client";

import type { ReactNode } from "react";

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
      onClick={() => window.dispatchEvent(new Event("open-consult"))}
    >
      {children}
    </button>
  );
}
