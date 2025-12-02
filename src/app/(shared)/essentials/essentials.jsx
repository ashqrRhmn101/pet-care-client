"use client";

import React, { useEffect } from "react";
import essentials from "@/data/essentials.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Essentials() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Title */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          <span className="text-primary">Winter</span>{" "}
          <span className="text-secondary">Essentials</span> ❄️
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {essentials.map((item) => (
            <div
              data-aos="zoom-in-up"
              key={item.id}
              className="
                card bg-base-100 shadow-md border border-base-300 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300
              "
            >
              <figure className="h-48 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title text-primary text-lg font-semibold">
                  {item.name}
                </h3>

                <p className="text-base-content/70">{item.desc}</p>

                <div className="">
                  <span className="badge badge-accent badge-outline">
                    Must Have
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
