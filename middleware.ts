import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Real routes that should NOT be redirected to the landing page.
const ALLOWED = new Set(["/", "/consultation"]);

// Coming-soon site is mostly a single page. Any old deep URL (e.g. Facebook ad
// "Learn More" links to /blepharoplasty) would otherwise 404, so send every
// unknown path to the landing page (preserving query params like fbclid/UTM).
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!ALLOWED.has(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url, 307);
  }
  return NextResponse.next();
}

export const config = {
  // Run on everything except Next internals, the API, and static files
  // (any path containing a dot, e.g. .png/.jpg/.ico/.webp).
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};
