"use client";

import React, { useEffect, useRef, useState, KeyboardEvent } from "react";

export type Card = {
  id: number;
  img: string;
  logo: string;
  alt: string;
  title?: string;
  description?: string;
};

interface Props {
  headline?: string;
  maxTranslate?: number;
  stagger?: number;
  maxScaleInc?: number;
}

/* ---------- data ------------------------------------------------------- */

const defaultCards: Card[] = [
  {
    id: 1,
    img: "scroll-img-1.webp",
    logo: "damac-white.webp",
    alt: "Roberto Cavalli interior",
    title: "Roberto Cavalli Suite",
    description:
      "Experience Italian luxury in this exquisitely designed suite by Roberto Cavalli.",
  },
  {
    id: 2,
    img: "scroll-img-2.webp",
    logo: "damac-white.webp",
    alt: "De Grisogono interior",
    title: "De Grisogono Penthouse",
    description:
      "Indulge in opulence with this De Grisogono-styled penthouse with panoramic city views.",
  },
  {
    id: 3,
    img: "scroll-img-3.webp",
    logo: "damac-white.webp",
    alt: "Versace interior",
    title: "Versace Villa",
    description:
      "Immerse yourself in iconic Versace aesthetics in this Mediterranean-inspired villa.",
  },
  {
    id: 4,
    img: "scroll-img-4.webp",
    logo: "damac-white.webp",
    alt: "Mandarin Oriental resort",
    title: "Mandarin Oriental Resort",
    description: "Relax in this serene resort by Mandarin Oriental, nestled by the sea.",
  },
  {
    id: 5,
    img: "scroll-img-5.webp",
    logo: "damac-white.webp",
    alt: "Mandarin Oriental resort",
    title: "Mandarin Oriental Deluxe",
    description: "Enjoy modern comforts and five-star amenities at this deluxe suite.",
  },
  {
    id: 6,
    img: "scroll-img-6.webp",
    logo: "damac-white.webp",
    alt: "Mandarin Oriental resort",
    title: "Mandarin Oriental Retreat",
    description: "A tranquil getaway with spa and fine dining at the heart of the resort.",
  },
  {
    id: 7,
    img: "scroll-img-7.webp",
    logo: "damac-white.webp",
    alt: "Mandarin Oriental resort",
    title: "Mandarin Oriental Garden Wing",
    description: "Surround yourself with lush gardens in this exclusive wing.",
  },
  {
    id: 8,
    img: "scroll-img-8.webp",
    logo: "damac-white.webp",
    alt: "Mandarin Oriental resort",
    title: "Mandarin Oriental Penthouse",
    description: "Top-floor luxury with private terrace and skyline views.",
  },
];

/* ---------- component -------------------------------------------------- */

export default function ParallaxShowcase({
  headline = "",
  maxTranslate = 140,
  stagger = 56,
  maxScaleInc = 0.08,
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // index in cards[]
  const [scrolled, setScrolled] = useState(false);
  const cards = defaultCards;

  /* ---------- parallax & reset ---------------------------------------- */

  const colOffset = (i: number) => (((i % 4) + 1) % 2 ? 0 : stagger);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    let ticking = false;

    const resetTransforms = () => {
      sec
        .querySelectorAll<HTMLDivElement>("[data-card]")
        .forEach((el) => {
          el.style.setProperty("--ty", "0px");
          el.style.setProperty("--sc", "1");
          el.style.setProperty("--op", "1");
        });
    };

    const update = () => {
      if (!scrolled) return;

      const vh = window.innerHeight;
      sec.querySelectorAll<HTMLDivElement>("[data-card]").forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const n = Math.max(-1, Math.min(1, (mid - vh / 2) / (vh / 2)));

        if (window.innerWidth >= 640) {
          const ty = -maxTranslate * (1 - Math.abs(n)) - colOffset(i);
          const sc = 1 + maxScaleInc * (1 - Math.abs(n));
          const op = 1 - Math.abs(n) * 0.5;
          el.style.setProperty("--ty", `${ty}px`);
          el.style.setProperty("--sc", `${sc}`);
          el.style.setProperty("--op", `${op}`);
        } else {
          el.style.setProperty("--ty", "0px");
          el.style.setProperty("--sc", "1");
          el.style.setProperty("--op", "1");
        }
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!scrolled) setScrolled(true);
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    resetTransforms();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [maxTranslate, stagger, maxScaleInc, scrolled]);

  /* ---------- helpers -------------------------------------------------- */

  const openCard = (idx: number) => setActiveIndex(idx);
  const closeCard = () => setActiveIndex(null);

  const showPrev = () =>
    activeIndex !== null && setActiveIndex((i) => (i! > 0 ? i! - 1 : i));
  const showNext = () =>
    activeIndex !== null &&
    setActiveIndex((i) => (i! < cards.length - 1 ? i! + 1 : i));

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") closeCard();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
  };

  /* ---------- render --------------------------------------------------- */

  if (!cards.length) return null;

  return (
    <>
      {/* ---------- main section ---------------- */}
      <section
        ref={sectionRef}
        className="relative mx-auto max-w-7xl px-4 py-28 pb-0 space-y-32 bg-white"
      >
        {headline && (
          <h2 className="mx-auto max-w-4xl text-center font-light tracking-wide text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug mb-16">
            {headline}
          </h2>
        )}

        {/* horizontal scroll (mobile) or grid (≥sm) */}
        <div
          className="
            flex flex-nowrap gap-4 overflow-x-auto px-4 snap-x snap-mandatory scrollbar-hide
            sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 sm:px-0 sm:snap-none sm:overflow-x-visible
            mb-24
          "
        >
          {cards.map((c, idx) => (
            <div
              key={c.id}
              data-card
              onClick={() => openCard(idx)}
              style={{
                transform: "translateY(var(--ty)) scale(var(--sc))",
                opacity: "var(--op)",
                willChange: "transform, opacity",
                cursor: "pointer",
                flex: "0 0 80%",
                scrollSnapAlign: "center",
                maxWidth: "320px",
              }}
              className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/4] transition-transform duration-300 ease-in-out hover:scale-[1.05]"
              tabIndex={0}
            >
              <img
                src={c.img}
                alt={c.alt}
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 hover:bg-black/60" />
              <img
                src={c.logo}
                alt={`${c.alt} logo`}
                className="absolute inset-x-0 bottom-6 mx-auto w-32 sm:w-36 md:w-40 opacity-90"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- overlay ---------------------------------------------- */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white p-4"
          onKeyDown={onKey}
          tabIndex={-1}
        >
          <div className="relative w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-xl">
            {/* close */}
            <button
              onClick={closeCard}
              className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/70 rounded-full w-9 h-9 flex items-center justify-center text-2xl focus:outline-none focus:ring-4 focus:ring-gray-400"
              aria-label="Close details"
            >
              &times;
            </button>

            {/* arrows */}
            {activeIndex > 0 && (
              <button
                onClick={showPrev}
                className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 items-center justify-center rounded-r-lg focus:outline-none"
                aria-label="Previous image"
              >
                ‹
              </button>
            )}
            {activeIndex < cards.length - 1 && (
              <button
                onClick={showNext}
                className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 items-center justify-center rounded-l-lg focus:outline-none"
                aria-label="Next image"
              >
                ›
              </button>
            )}

            {/* current image */}
            <img
              src={cards[activeIndex].img}
              alt={cards[activeIndex].alt}
              className="w-full h-64 object-cover"
              draggable={false}
            />
            <div className="p-6">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                {cards[activeIndex].title || cards[activeIndex].alt}
              </h3>
              <p className="text-gray-700">{cards[activeIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
