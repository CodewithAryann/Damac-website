'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'PREMIUM HEALTHCARE',
    description:
      'With strong healthcare investments, the city is ideal for supporting your health and wellbeing.',
    image: 'Healthcare.webp',
  },
  {
    title: 'ENTERTAINMENT HUB',
    description:
      'From iconic landmarks to luxury attractions, Dubai is a world-class entertainment capital.',
    image: 'Entertainment.webp',
  },
  {
    title: 'WORLD CLASS EDUCATION',
    description:
      'Dubai offers top-tier schools and universities with globally recognized curricula, ideal for families.',
    image: 'Education.webp',
  },
  {
    title: 'COMMUNAL SAFETY',
    description:
      'The UAE ranks among the world’s safest nations, with a well-developed, effective law enforcement system.',
    image: 'Communal.webp',
  },
  {
    title: 'TOURISTIC APPEAL',
    description:
      'Dubai’s iconic landmarks, luxury shopping, and vibrant culture make it a top global tourist destination.',
    image: 'Touristic.jpg',
  },
];

const HeroSwiper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full px-4 py-12">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 2.1 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
  <div
    className="h-[300px] rounded-xl overflow-hidden relative bg-cover bg-center text-white"
    style={{ backgroundImage: `url(${slide.image})` }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/30 z-0 rounded-xl" />

    {/* Text content */}
    <div className="relative z-10 flex flex-col justify-end h-full p-6">
      <h3 className="text-2xl font-semibold tracking-wide mb-2 text-white">{slide.title}</h3>
      <p className="text-sm max-w-md text-white">{slide.description}</p>
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6 mt-6">
        <button ref={prevRef} className="text-gray-800 hover:text-black">
          <ChevronLeft size={28} />
        </button>
        <button ref={nextRef} className="text-gray-800 hover:text-black">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default HeroSwiper;
