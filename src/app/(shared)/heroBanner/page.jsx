"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

export default function Banner() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Your Area";
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const delaySpeed = 1500;

  useEffect(() => {
    let timeout;

    if (!isDeleting && text === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), delaySpeed);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <div className="relative w-full my-5 h-[60vh] md:h-[65vh]">
      {/* === CAROUSEL === */}
      <div className="w-full h-full rounded-xl overflow-hidden">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={3000}
          transitionTime={500}
          className="h-full"
        >
          <div className="h-[60vh] md:h-[70vh]">
            <Image
              src="/heroImg1.jpg"
              alt="Banner 1"
              width={600}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[60vh] md:h-[70vh]">
            <Image
              src="/heroImg2.jpg"
              alt="Banner 2"
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[60vh] md:h-[65vh]">
            <Image
              src="/heroImg3.jpg"
              alt="Banner 3"
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[60vh] md:h-[65vh]">
            <Image
              src="/heroImg4.jpg"
              alt="Banner 4"
              width={600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </Carousel>
      </div>

      {/* === OVERLAY CONTENT === */}
      <div className="absolute inset-0 z-20 flex items-center px-6 md:px-16 pointer-events-none">
        <div className="max-w-xl bg-black/10 backdrop-blur-sm p-5 rounded-xl pointer-events-auto">
          <h2 className="text-2xl md:text-2xl font-bold leading-tight text-white">
            <span className="text-primary">CozyCompanions –</span> <br />
            <span className="text-secondary">
              {text}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            Winter Pet Care Made Warm & Fun
          </h2>

          <p className="mt-3 text-sm md:text-sm text-white opacity-90">
            Keep your furry friends warm this winter! Explore tips, outfits, and
            safety guides to make cold days fun & cozy.
          </p>

          <button className="btn btn-primary mt-4">Explore Now</button>
        </div>
      </div>
    </div>
  );
}