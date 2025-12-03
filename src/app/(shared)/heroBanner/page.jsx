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
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 150); 
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
    <section className="max-w-7xl mx-auto my-5 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
      {/* LEFT CONTENT */}
      <div className="md:w-1/2 w-full p-10 flex flex-col justify-center bg-gradient-to-r from-[#303082] to-[#5050a5] text-white">
        <h2 className="text-3xl md:text-3xl font-extrabold leading-snug">
          CozyCompanions –
          <br />
          <span className="text-yellow-400">
            {text}
            <span className="animate-pulse">|</span>
          </span>
          <br />
          Winter Pet Care Made Warm & Fun
        </h2>

        <p className="mt-4 text-base opacity-90">
          Keep your furry friends warm this winter! Explore tips, outfits, and
          safety guides to make cold days fun & cozy.
        </p>

        <button className="btn bg-yellow-400 border-none text-black hover:bg-yellow-500 mt-6 w-40 font-bold">
          Explore Now
        </button>
      </div>

      {/* RIGHT CAROUSEL */}
      <div className="md:w-1/2 w-full">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          transitionTime={500}
          className="h-full"
        >
          {["heroImg1.jpg", "heroImg2.jpg", "heroImg3.jpg", "heroImg4.jpg"].map(
            (img, index) => (
              <div key={index} className="h-[300px] md:h-[400px] lg:h-[450px]">
                <Image
                  src={`/${img}`}
                  alt={`Banner ${index + 1}`}
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}
        </Carousel>
      </div>
    </section>
  );
}
