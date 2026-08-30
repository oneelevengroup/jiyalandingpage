import type { Metadata } from "next";
import Script from "next/script";
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
  title: "JIYA | Coming Soon",
  description:
    "JIYA, Jindal Institute for Youthful Aging. A refined new experience is on the way. Facial cosmetic surgery & regenerative care in Raleigh, NC.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${forum.variable} ${mulish.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18406910212"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18406910212');`}
        </Script>
      </head>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
