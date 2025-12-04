"use client";

import tips from "@/data/tips.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Tips() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-primary">Winter</span>{" "}
          <span className="text-secondary">Pet Care Tips</span>
        </h2>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.id}
              data-aos="zoom-in-up"
              className="card bg-base-100 shadow-md hover:shadow-xl border-base-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="card-body">
                <h3 className="card-title text-lg md:text-xl text-primary font-semibold">
                  {tip.title}
                </h3>

                <p className="text-base-content/70 leading-relaxed">
                  {tip.description}
                </p>

                <div className="mt-4">
                  <div className="badge badge-accent badge-outline">
                    Helpful Tip
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
