"use client";

import React, { useEffect } from "react";
import vets from "@/data/vets.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function Vets() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-14"
          data-aos="fade-down"
        >
          <span className="text-primary">Meet Our</span>{" "}
          <span className="text-secondary">Expert Vets</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {vets.map((vet, index) => (
            <div
              key={vet.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 80}
              className="
                card bg-base-100 shadow-lg border border-base-300 
                hover:shadow-2xl hover:-translate-y-2 
                transition-all duration-300 rounded-2xl
              "
            >
              {/* Image */}
              <figure className="pt-8">
                <Image
                  src={vet.photo}
                  alt={vet.name}
                  width={150}
                  height={150}
                  className="
                    rounded-full object-cover shadow-md 
                    border-4 border-secondary/60
                  "
                />
              </figure>

              <div className="card-body text-center">

                {/* Name & Verified */}
                <div className="flex justify-center items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-primary">
                    {vet.name}
                  </h3>
                  <FaCheckCircle className="text-success text-lg" />
                </div>

                {/* Specialty */}
                <p className="text-secondary font-medium">
                  {vet.specialty}
                </p>

                {/* Bio */}
                {/* <p className="text-base-content/70 text-sm leading-relaxed">
                  {vet.bio}
                </p> */}

                {/* Experience Tag */}
                <div className="mt-">
                  <span className="badge badge-primary badge-outline px-4 py-3">
                    {vet.experience} Years Experience
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
