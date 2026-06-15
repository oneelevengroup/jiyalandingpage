"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

const SLIDES = [1, 2, 3, 4, 5, 6, 7, 8];

export default function BeforeAfterGallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const itemStep = (track: HTMLDivElement) => {
    const item = track.querySelector<HTMLElement>(".gallery-item");
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    return item ? item.offsetWidth + gap : track.clientWidth;
  };

  const step = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * itemStep(track), behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let paused = false;
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    track.addEventListener("pointerenter", onEnter);
    track.addEventListener("pointerleave", onLeave);

    const id = window.setInterval(() => {
      if (paused) return;
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: itemStep(track), behavior: "smooth" });
      }
    }, 4000);

    return () => {
      window.clearInterval(id);
      track.removeEventListener("pointerenter", onEnter);
      track.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="gallery">
      <div className="gallery-inner">
        <Reveal>
          <p className="section-eyebrow">Real Results</p>
          <h2 className="section-title">Before &amp; After</h2>
        </Reveal>

        <div className="gallery-viewport">
          <button
            type="button"
            className="gallery-nav prev"
            aria-label="Previous"
            onClick={() => step(-1)}
          >
            <span aria-hidden="true">&#8249;</span>
          </button>

          <div className="gallery-track" ref={trackRef}>
            {SLIDES.map((n) => (
              <figure className="gallery-item" key={n}>
                <Image
                  src={`/gallery/ba-${n}.jpg`}
                  alt={`JIYA before and after result ${n}`}
                  fill
                  sizes="(max-width: 640px) 80vw, 360px"
                  className="gallery-img"
                />
              </figure>
            ))}
          </div>

          <button
            type="button"
            className="gallery-nav next"
            aria-label="Next"
            onClick={() => step(1)}
          >
            <span aria-hidden="true">&#8250;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
