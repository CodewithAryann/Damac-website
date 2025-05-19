"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const logos = [
  {
    src: "image_1.webp",
    alt: "Roberto Cavalli",
  },
  {
    src: "image_2.webp",
    alt: "Mandarin Oriental",
  },
  {
    src: "image_3.webp",
    alt: "Versace",
  },
  {
    src: "image_4.webp",
    alt: "De Grisogono",
  },
  {
    src: "image_5.webp",
    alt: "Paramount Hotels",
  },
  {
    src: "image_6.webp",
    alt: "Trump",
  },
  {
    src: "image_7.webp",
    alt: "Radisson",
  },
  {
    src: "image_8.webp",
    alt: "Rotana",
  },
];

export default function CuratedCollaborations() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4 text-black">
        A new realm of curated collaborations
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        DAMAC has worked closely with some of the world's most sought-after
        purveyors of luxury to create truly exquisite environments.
      </p>

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        freeMode
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full max-w-6xl mx-auto"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-24 w-auto object-contain"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
