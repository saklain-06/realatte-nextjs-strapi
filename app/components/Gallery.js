"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Gallery({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] mb-10">
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={20}
        className="rounded-xl"
      >
        {images.map((img, i) => {
          const url =
            img.formats?.large?.url ||
            img.formats?.medium?.url ||
            img.url;

          return (
            <SwiperSlide key={i}>
              <img
                src={`http://127.0.0.1:1337${url}`}
                alt={`Gallery ${i}`}
                className="w-full h-[350px] object-cover rounded-xl"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
