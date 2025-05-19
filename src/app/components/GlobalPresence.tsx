'use client';

import React, { useRef } from 'react';

const images = [
  {
    src: 'Mandarin.webp',
    label: 'Mandarin Maldives',
    logo: 'MOMD_1.webp',
  },
  {
    src: 'img-beirut.webp',
    label: 'Beirut Tower',
    logo: 'damac_beirut.webp',
  },
  {
    src: 'IMG_-_Seaview.webp',
    label: 'Seaviews Qatar',
    logo: 'Burj_DAMAC.webp',
  },
  {
    src: 'damac_riyadh.webp',
    label: 'Riyadh Towers',
    logo: 'DAMAC-Riyadh-Logo.webp',
  },
  {
    src: 'Mandarin.webp',
    label: 'Mandarin Maldives',
    logo: 'MOMD_1.webp',
  },
  {
    src: 'img-beirut.webp',
    label: 'Beirut Tower',
    logo: 'damac_beirut.webp',
  },
];

const scrollbarHideStyle: React.CSSProperties = {
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
};

const GlobalPresence: React.FC = () => {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.WheelEvent) => {
    if (topRowRef.current && bottomRowRef.current) {
      topRowRef.current.scrollLeft += e.deltaY;
      bottomRowRef.current.scrollLeft -= e.deltaY;
    }
  };

  const ImageCard = ({
    src,
    label,
    logo,
  }: {
    src: string;
    label: string;
    logo: string;
  }) => (
    <div className="relative rounded-xl w-[300px] h-[200px] shrink-0 overflow-hidden">
      {/* Image */}
      <img src={src} alt={label} className="w-full h-full object-cover" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Logo on top */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
        <img src={logo} alt="Logo" className="w-30 h-30 object-contain" />
      </div>

      {/* Label at bottom */}
      <div className="absolute bottom-2 w-full text-center text-white text-sm font-semibold z-20 bg-opacity-50 py-1 px-2 uppercase">
        {label}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white py-10 overflow-hidden" onWheel={handleScroll}>
      <h2 className="text-center text-3xl font-semibold mb-8 animate-fadeInUp pb-7 text-black">
        OUR GLOBAL PRESENCE
      </h2>

      <div className="space-y-6 px-4">
        {/* Top row — always visible */}
        <div
          ref={topRowRef}
          className="flex space-x-4 overflow-x-scroll scroll-smooth"
          style={{ ...scrollbarHideStyle }}
        >
          {images.map((item, index) => (
            <ImageCard key={`top-${index}`} {...item} />
          ))}
        </div>

        {/* Bottom row — hidden on mobile */}
        <div
          ref={bottomRowRef}
          className="hidden md:flex space-x-4 overflow-x-scroll scroll-smooth"
          style={{ ...scrollbarHideStyle }}
        >
          {images.map((item, index) => (
            <ImageCard key={`bottom-${index}`} {...item} />
          ))}
        </div>
      </div>

      {/* Hide scrollbars on all platforms */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default GlobalPresence;
