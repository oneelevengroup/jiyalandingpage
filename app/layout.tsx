import type { Metadata } from "next";
import { Forum, Mulish } from "next/font/google";
import "./globals.css";

const forum = Forum({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-forum",
});

const mulish = Mulish({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "JIYA — Coming Soon",
  description:
    "JIYA — Jindal Institute for Youthful Aging. A refined new experience is on the way. Facial cosmetic surgery & regenerative care in Raleigh, NC.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${forum.variable} ${mulish.variable}`}>
      <body>{children}</body>
    </html>
  );
}
